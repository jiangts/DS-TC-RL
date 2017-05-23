#!/usr/bin/env node

const parser = require('./parser');

const argv = require('yargs').help().argv;

const fs = require('fs');

/***** Parsing HTML *****/
if(argv.html) {
	parser.parse({html: argv.html});
}

/***** Parsing File *****/
if(argv.file) {
  html = fs.readFileSync(argv.file, 'utf8');
  parser.parse({html});
}

/***** Parsing URL *****/
if(argv._[0] || argv.url) {
	url = argv.url || argv._[0]
	parser.parse({url: url});
	console.log("URL Parsed: ", url)
}
