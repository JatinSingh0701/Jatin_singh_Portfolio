const express = require('express');
const homeRouter = require('./routes/home.routes');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(homeRouter);

app.listen(port, () => {
  console.log('Server is good to go on http://localhost:' + port);
});
