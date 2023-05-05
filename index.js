const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;


const Data = require('./data/data.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('cuising is running')
});

app.get('/data', (req, res) => {
    res.send(Data);
})

app.get('/data/:id', (req, res) => {
    const id = req.params.id;
    const selectData = Data.find(n => n.id === id);
    res.send(selectData)
})


app.listen(port, () => {
    console.log(`chief API is running on port: ${port}`)
})