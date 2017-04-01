/* eslint-disable global-require */
import express from 'express';
import csvtojson from 'csvtojson';

const min = (arr) => arr.reduce((a, b) => Math.min(a, b));
const max = (arr) => arr.reduce((a, b) => Math.max(a, b));

const webpack = require('webpack');
const path = require('path');
const config = require('../webpack.config.dev');

const PORT = 3001;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

if (process.NODE_ENV !== 'production') {
    app.use(require('webpack-hot-middleware')(compiler));
}

let data = []; // eslint-disable-line prefer-const

csvtojson()
    .fromFile('./data.csv')
    .on('json', ({ x, y }) => {
        data.push({
            x,
            y
        });
    })
    .on('done', (error) => {
        if (error) {
            console.log('Unable to load CSV file');
        } else {
            app.use('/scatter-data', (req, res) => {
                const result = {
                    minX: min(data.map((p) => p.x)),
                    maxX: max(data.map((p) => p.x)),
                    minY: min(data.map((p) => p.y)),
                    maxY: max(data.map((p) => p.y)),
                    points: data
                };

                return res.json(result);
            });

            if (process.NODE_ENV === 'production') {
                app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../src/index.html')));
            } else {
                app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../dist/index.html')));
            }

            app.listen(PORT, () => console.log(`Data loaded. Server is running on port ${PORT}`));
        }
    });