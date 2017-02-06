'use strict';
var generateSitemap = require('../');

main();

function main() {
  //process.stdout.write('<?xml version="1.0" encoding="UTF-8"?>');
  generateSitemap(process.stdout, {
    findRoot: './',
    ignoreFile: '',
    additionalUrls: ['https://app.example.com/'],
    prefix: 'http://example.com/',
    pretty: true});
}
