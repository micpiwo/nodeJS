var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
/*Apple de l'odm => object document model*/
const mongoose = require('mongoose');
/*CONNEXION A MonGoose*/
const configDb = require('./config/database.js');
/*Appel de la lib cors avec express*/
const cors = require('cors');

/*ROUTES*/
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var catalogueRouter = require('./api/catalogue');
var usersRouter = require('./api/users');

var app = express();
/*Init lib cors pour un dev local = options de securité*/
/*Parametrage des différent usage => on accepte tous*/
var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}
/*Appel de l'init*/
app.use(cors(corsOptions));

/*Connexion */
/*Appel de database.js dans le dossier configDb*/
mongoose.connect(configDb.database, {
  useNewUrlParser: true
});

/*Controle de la connexion*/
mongoose.set('useFindAndModify', false);
let db = mongoose.connection;

db.once('open', () => {
  console.log('Connexion etablie a mongoDb');
});

db.on('error', console.error.bind(console, 'connection error:'));

// Appel de engine pug -> moteur de template (twig est possible)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
/*Chemin pour les css, js, images*/
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/smoothie', usersRouter);
app.use('/smoothie', catalogueRouter);
// catch 404 page non trouvée
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // enviroment de dev ou prod
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // page erreur 500
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
