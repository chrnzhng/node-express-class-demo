const express = require('express'),
    app = express(),
    port = 3000,
    data = require('./data'),
    bodyParser = require('body-parser');

// Top - level middleware endpoints
app.use(bodyParser.json());

// CRUD Create Post
app.post('/api/addBook', (req, res, next) => {
    console.log(req.body);
    data.push(req.body)
    res
        .status(200)
        .send(data);
})
// Read Get
app.get('/api/getBooks', (req, res, next) => {
    res
        .status(200)
        .send({books: data})

})

app.put('/api/updateBook/:index/:name', (req, res, next) => {
    console.log(req.params)
    data[req.params.index].name = req.params.name;
    res
        .status(200)
        .send(data);
})

app.delete('/api/deleteIt/:index', (req, res, next) => {
    data.splice(req.params.index, 1)
    res.status(200).send(data);
})
// Update Put Delete Delete axios.get('/api/mydata').then()
// app.get('/api/mydata') Methods need to match app.METHOD(URL, HANDLER);
// - METHOD --- get, put, post, delete
// - URL --- endpoint url ex: 'api/getData'
// - Handler --- callback function that fires when endpoint is hit

app.listen(port, () => console.log(`Docked on port number ${port}`))