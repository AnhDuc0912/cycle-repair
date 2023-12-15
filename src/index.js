const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();
const hostname = '127.0.0.1';
const port = 8000;

const route = require('./routes');
const db = require('./config/db');

//Connect to DB
db.connect()

app.use(express.static(path.join(__dirname, 'public')));

//override method of http protocol
app.use(methodOverride('_method'));;

//Http logger
app.use(morgan('combined'));

//bodyParse
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Template engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs',
  helpers: {
    sum(a, b) { return a + b; },
  }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//routes init
route(app);

app.listen(port, () => {
  console.log(`Sever running at http://${hostname}:${port}`)
});