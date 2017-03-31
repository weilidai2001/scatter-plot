import express from 'express';
import csvtojson from 'csvtojson';

const PORT = 3001;
const app = express();

let data = [];

app.use('/load', (req, res) => {
    csvtojson()
        .fromFile('./data.csv')
        .on('json', ({x, y}) => {
            console.log('called')
            data.push({
                type: 'One',
                x,
                y
            })
        })
        .on('done', () => {

        })

    res.json(data);
});

app.use('/', (req, res) => res.json({
    status: 'OK'
}));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));