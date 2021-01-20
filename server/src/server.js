/* eslint-disable no-console */
require('dotenv').config();

const app = require('./app');
const { PORT } = require('./config');

app.get('/', (req, res) => {
  res.send('Hello from VSCode');
});

app.listen(PORT, () => {
  console.log(`Server has started on port: ${PORT}`);
});

module.exports = app;
