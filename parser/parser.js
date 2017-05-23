const cheerio = require('cheerio');
const request = require('request-promise');


/* ==== fetch JSON from HTML form ==== */
const arr2json = (arr) => {
  return arr.reduce((out, field) => {
    out[field.name] = field.value;
    return out;
  }, {});
}

const html2json = ($) => {
  arrs = [];
  $('form').each((i, elem) => {
    var $form = $('<form>');

    $form.append($(elem).find('input'));

    let fs = '<form>' + $form.html() + '</form>';
    $$ = cheerio.load(fs);
    arrs.push($$('form').serializeArray());
  });

  return arrs.map(arr2json);
};


/* ==== convert raw json to goal ==== */
const json2goal = (json) => {
  request_slots = {};
  inform_slots = {};
  diaact = 'request';
  for(const key in json) {
    const value = json[key];
    if (value === '') {
      request_slots[key] = 'UNK';
    } else {
      inform_slots[key] = value;
    }
  }
  return Object.keys(json).length > 0 ? {request_slots, inform_slots, diaact} : null;
}



/********   Parse URL/HTML   ********/
/* 
  return: promise of pased result 
*/

exports.parse = (options) => {
  const {url, html} = options;

  let handler;

  if(url) {
    handler = request(url)
  }
  if(html) {
    handler = Promise.resolve(html);
  }

  return handler
    .then(htmlString => cheerio.load(htmlString))
    .then(html2json)
    .then(jsons => jsons.map(json2goal))
    .then(tasks => tasks.filter(t => t))
    .catch(err => {
      console.error('Crawling Failed');
      console.error(err);
    });
}

