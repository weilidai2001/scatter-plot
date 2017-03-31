import express from 'express';
import csvtojson from 'csvtojson';

const PORT = 3001;
const app = express();

let data = [];

csvtojson()
    .fromFile('./data.csv')
    .on('json', ({x, y}) => {
        data.push({
            type: 'One',
            x,
            y
        })
    })
    .on('done', (error) => {
        if (error) {
            console.log('Unable to load CSV file')
        } else {
            app.use('/scatter-data', (req, res) => res.json(data));

            app.use('/', (req, res) => res.json({
                status: 'OK'
            }));

            app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
        }
    });