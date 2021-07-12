
const cors = require('cors');
// require the Express module
const express = require("express");
// creates an instance of an Express server
const cart = require('./cart-items')
const app = express();
// define the port
const port = 3000;
// run the server
app.use(cors());
app.use(express.json());
app.use('/cart-items', cart);
app.use(express.static('/' + "public"));

//run the server
app.listen(port, () => console.log(`Listening on port: ${port}.`));
app.get('/', function (req, res) {
    res.send('testing')
  })
  