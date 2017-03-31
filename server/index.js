import express from 'express';

const PORT = 3001;
const app = express();


app.use('/', (req, res) => res.json({
    status: 'OK'
}));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));