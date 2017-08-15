const express = require('express'),
    app = express(),
    port = 3000,
    data = require('./data'),
    bc = require('./book_controller'),
    bodyParser = require('body-parser');

// Top - level middleware endpoints
app.use(bodyParser.json());

// CRUD 
// Create Post
app.post('/api/addBook', bc.post )
// Read Get
app.get('/api/getBooks', bc.get)
// Update Put
app.put('/api/updateBook/:index/:name', bc.put)
// Delete Delete
app.delete('/api/deleteIt/:index', bc.delete)
// Update Put Delete Delete axios.get('/api/mydata').then()
// app.get('/api/mydata') Methods need to match app.METHOD(URL, HANDLER);
// - METHOD --- get, put, post, delete
// - URL --- endpoint url ex: 'api/getData'
// - Handler --- callback function that fires when endpoint is hit

app.listen(port, () => console.log(`Docked on port number ${port}`))