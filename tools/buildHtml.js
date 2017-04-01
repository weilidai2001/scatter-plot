// This script copies src/index.html into /dist/index.html
// This is a good example of using Node and cheerio to do a simple file transformation.
// In this case, the transformation is useful since we only use a separate css file in prod.
const fs = require('fs');
const cheerio = require('cheerio');
const colors = require('colors');

/* eslint-disable consistent-return */

fs.readFile('src/index.html', 'utf8', (err, markup) => {
    if (err) {
        return console.log(err);
    }

    const $ = cheerio.load(markup);

    fs.writeFile('dist/index.html', $.html(), 'utf8', (errorWriteFile) => {
        if (errorWriteFile) {
            return console.log(errorWriteFile);
        }
        console.log('index.html written to /dist'.green);
    });
});
