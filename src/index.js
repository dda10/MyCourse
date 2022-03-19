const express = require('express');
const morgan = require('morgan');
const app = express();
const hbs = require('express-handlebars');
const path = require('path');
const port = 3000;
const route = require('./routes');
const db = require('./config/db');

// Connect to db
db.connect();

// Use middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static file
app.use(express.static(path.join(__dirname, 'public')));

// // HTTP logger
// app.use(morgan("combined"));

// Template engine using handlebars
app.engine(
  'hbs',
  hbs.engine({
    extname: '.hbs',
  })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Routes init
route(app);

// Port
app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
});
