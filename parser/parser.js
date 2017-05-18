const cheerio = require('cheerio');
const request = require('request-promise');

const html2json = function($) {
  return $('form').serializeArray();
};

const json2goal = function(json) {
  return json;
}

request('http://www.google.com')
  .then((htmlString) => cheerio.load(htmlString))
  .then(html2json)
  .then((jsons) => jsons.map(json2goal))
  .then(console.log)
  .catch(function (err) {
    console.error('crawling failed');
  });

