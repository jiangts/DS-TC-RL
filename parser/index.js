#!/usr/bin/env node

const parser = require('./parser');

const argv = require('yargs')
.help()
.argv;

const fs = require('fs');

if(argv.html)
parser.parse({html: argv.html});
if(argv.file) {
  html = fs.readFileSync(argv.file, 'utf8');
  parser.parse({html});
}
if(argv._[0])
parser.parse({url: argv._[0]});
