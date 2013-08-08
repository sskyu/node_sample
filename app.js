
/**
 * Module dependencies.
 */

var express = require('express')
  , partials = require('express-partials')
  , routes = require('./routes')
  , user = require('./routes/user')
  , valid = require('./models/valid')
  , http = require('http')
  , path = require('path')
  , RedisStore = require('connect-redis')(express);

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.set('secretKey', 'hogehogefugafugapiyopiyo');
app.set('cookieSessionKey', 'sid');
app.use(partials());
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser(app.get('secretKey')));
app.use(express.session({
    key: app.get('cookieSessionKey'),
    store: new RedisStore({ db: 1 }),
    cookie: { maxAge: 7 * 24 * 3600 * 1000 }
}));
app.use(app.router);
app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/dammy', routes.dammy);

app.get('/', routes.index);
app.get('/main/top', valid.isAuthorized, routes.top);

app.get('/user/login', user.loginPage);
app.post('/user/login', user.login);
app.get('/user/logout', user.logoutPage);
app.get('/user/list/:role?', valid.isAuthorized, valid.forAdmin, user.listPage);
app.get('/user/view/:uid', valid.isAuthorized, user.viewPage);
app.get('/user/edit/:uid', valid.isAuthorized, user.editPage);
app.post('/user/edit', user.edit);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
