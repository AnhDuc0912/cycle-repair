const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const session = require('express-session')
const middleware = require('./app/middlewares')
const paginate = require('express-paginate');

const app = express();
const hostname = '127.0.0.1';
const port = 8000;

const route = require('./routes/routes');
const db = require('./config/db');

//session
app.use(cookieParser());
app.use(
  session({
    resave: false,
    secret: 'DucDepZaiVCL091203@#',
    saveUninitialized: false,
    cookie: {
      sameSite: 'strict',
      secure: false,
      maxAge: 24 * 60 * 60 * 1000
    }
  })
);

//middleware
middleware(app)

//paginate
app.use(paginate.middleware(6, 50));

//Connect to DB
db.connect()

app.use(express.static(path.join(__dirname, 'public')));

//override method of http protocol
app.use(methodOverride('_method'));;

//Http logger
app.use(morgan('combined'));

//bodyParse
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

//Template engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs',
  helpers: {
    sum(a, b) {
      return a + b;
    },
    vnd(x) {
      x = x.toLocaleString('vi', {
        style: 'currency',
        currency: 'VND'
      });
      return x
    },
    section: function (name, options) {
      if (!this._sections) this._sections = {};

      if (!this._sections[name]) {
        this._sections[name] = [];
      }

      this._sections[name].push(options.fn(this));
      return null;
    },
    yield: function (name, options) {
      if (this._sections && this._sections[name]) {
        return this._sections[name].join('\n');
      }
      return '';
    }
  }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//routes init
route(app);


app.listen(port, () => {
  console.log(`Sever running at http://${hostname}:${port}`)
});