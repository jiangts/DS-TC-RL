const cheerio = require('cheerio');
const request = require('request-promise');

const parseForm = function($) {
  return $('form').serializeArray();
};

request('http://www.google.com')
  .then(function (htmlString) {
    return cheerio.load(htmlString)
  })
  .then(parseForm)
  .then(console.log)
  .catch(function (err) {
    // Crawling failed...
  });

