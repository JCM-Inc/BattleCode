const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const path = require('path');
// const util = require('./util')

const app = express();

app.use(express.static(path.join(__dirname, '/client')));

dotenv.load();
app.set('port', (process.env.PORT || 5000));
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());
app.listen(app.get('port'));

app.get('/', (req, res) => {
  res.end('serving battleCODES!');
});
