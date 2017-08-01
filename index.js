const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const path = require('path');
// const util = require('./util')

const app = express();

app.use(express.static(path.join(__dirname, '/client')));
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 5000));
app.get('/', (req, res) => {
  res.end('serving battleCODES!');
});
app.listen(app.get('port'));
