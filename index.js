const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const path = require('path');
// const db = require('./dbTools'); 

const app = express();

app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'),() => console.log('listening on port', app.get('port')));
