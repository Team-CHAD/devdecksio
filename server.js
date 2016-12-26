const express = require('express');
const sassMiddleware = require('node-sass-middleware');
const path = require('path');
const config = require('./config');

const app = express();

app.use(sassMiddleware({
  src: path.join(__dirname, 'src'),
  dest: path.join(__dirname, 'public'),
  debug: true,
  outputStyle: 'extended',
}));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('index.html');
});

app.listen(config.PORT, () => {
  console.log('devdecks.io listening on port', config.PORT);
});
