// app.js

var express = require('express');
var bodyParser = require('body-parser');

var product = require('./routes/product'); // Imports routes for the products
var app = express();


// Set up mongoose connection
var mongoose = require('mongoose'); 
//Debes crear una cuenta en mlab y crear tu db en este caso: productosdid
var dev_db_url = 'mongodb://youser:ourpass@dsyournumber.mlab.com:port/productosdid';
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB error de conexion:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

var port = 1234;

app.listen(port, () => {
    console.log('Servidor se en encuentra activo corriendo en el puerto numero ' + port);
});
