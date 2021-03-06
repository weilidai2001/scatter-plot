/* eslint-disable global-require */
import express from 'express';
import csvtojson from 'csvtojson';
import { PORT } from '../config';

const min = (arr) => arr.reduce((a, b) => Math.min(a, b));
const max = (arr) => arr.reduce((a, b) => Math.max(a, b));

const webpack = require('webpack');
const path = require('path');
const config = require('../webpack.config.dev');

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

if (process.NODE_ENV !== 'production') {
    app.use(require('webpack-hot-middleware')(compiler));
}

app.use('/scatter-data', (req, res) => {
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
                return res.status(500).json({
                    err: 'Error loading CSV'
                });
            }

            const result = {
                minX: min(data.map((p) => p.x)),
                maxX: max(data.map((p) => p.x)),
                minY: min(data.map((p) => p.y)),
                maxY: max(data.map((p) => p.y)),
                points: data
            };

            return res.json(result);
        });
});

if (process.NODE_ENV === 'production') {
    app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../src/index.html')));
} else {
    app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../dist/index.html')));
}

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
