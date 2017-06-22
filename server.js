const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const connectionString = 'postgres://localhost/test';

massive(connectionString).then(function(db) {

    app.set('db', db);
});


var app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/api/product/:productId', productsCtrl.getOne);
app.get('/api/product', productsCtrl.getAll);
app.put('/api/product/:productId', productsCtrl.update);
app.post('/api/product', productsCtrl.create);
app.delete('/api/product/:productId', productsCtrl.delete);


app.listen(3000, function() {
    console.log('server is working go away now');
});