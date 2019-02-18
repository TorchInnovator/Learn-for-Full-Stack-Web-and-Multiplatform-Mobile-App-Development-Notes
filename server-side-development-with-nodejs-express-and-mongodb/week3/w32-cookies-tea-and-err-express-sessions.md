# Cookies, Tea and err . . . Express Session

### HTTP Cookies

* Small piece of data sent from a web server and stored on the client side
* Each subsequent request from the client side should include the cookie in the request header

### Cookies

![](/assets/backendW3_2Cookies.png)

# Using Cookies

### Using cookie-parser

* install the cookie-parser Express middleware

```
 npm install cookie-parser --save
```

* Update _app.js_

```js
. . .

app.use(cookieParser('12345-67890-09876-54321'));

function auth (req, res, next) {

  if (!req.signedCookies.user) {
    var authHeader = req.headers.authorization;
    if (!authHeader) {
        var err = new Error('You are not authenticated!');
        res.setHeader('WWW-Authenticate', 'Basic');              
        err.status = 401;
        next(err);
        return;
    }
    var auth = new Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
    var user = auth[0];
    var pass = auth[1];
    if (user == 'admin' && pass == 'password') {
        res.cookie('user','admin',{signed: true});
        next(); // authorized
    } else {
        var err = new Error('You are not authenticated!');
        res.setHeader('WWW-Authenticate', 'Basic');              
        err.status = 401;
        next(err);
    }
  }
  else {
      if (req.signedCookies.user === 'admin') {
          next();
      }
      else {
          var err = new Error('You are not authenticated!');
          err.status = 401;
          next(err);
      }
  }
}

. . .
```

# Express Sessions Part 1

### Installing express-session

* install \_express-session \_and \_session-file-store \_Node modules 

```
     npm install express-session session-file-store --save
```

### Using express-session

* update _app.js_

```js
. . .

var session = require('express-session');
var FileStore = require('session-file-store')(session);

. . .

app.use(session({
  name: 'session-id',
  secret: '12345-67890-09876-54321',
  saveUninitialized: false,
  resave: false,
  store: new FileStore()
}));

function auth (req, res, next) {
    console.log(req.session);

    if (!req.session.user) {
        var authHeader = req.headers.authorization;
        if (!authHeader) {
            var err = new Error('You are not authenticated!');
            res.setHeader('WWW-Authenticate', 'Basic');                        
            err.status = 401;
            next(err);
            return;
        }
        var auth = new Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
        var user = auth[0];
        var pass = auth[1];
        if (user == 'admin' && pass == 'password') {
            req.session.user = 'admin';
            next(); // authorized
        } else {
            var err = new Error('You are not authenticated!');
            res.setHeader('WWW-Authenticate', 'Basic');
            err.status = 401;
            next(err);
        }
    }
    else {
        if (req.session.user === 'admin') {
            console.log('req.session: ',req.session);
            next();
        }
        else {
            var err = new Error('You are not authenticated!');
            err.status = 401;
            next(err);
        }
    }
}

. . .
```

# Express Sessions Part 2

### User Model and User Authentication

* Add a new Mongoose model for _users \_in the file named \_user.js_

```js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password:  {
        type: String,
        required: true
    },
    admin:   {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('User', User);
```

* Update \_users.js \_in the routes folder to support user registration

```js
. . .

const bodyParser = require('body-parser');
var User = require('../models/user');

router.use(bodyParser.json());

. . .

router.post('/signup', (req, res, next) => {
  User.findOne({username: req.body.username})
  .then((user) => {
    if(user != null) {
      var err = new Error('User ' + req.body.username + ' already exists!');
      err.status = 403;
      next(err);
    }
    else {
      return User.create({
        username: req.body.username,
        password: req.body.password});
    }
  })
  .then((user) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({status: 'Registration Successful!', user: user});
  }, (err) => next(err))
  .catch((err) => next(err));
});

router.post('/login', (req, res, next) => {

  if(!req.session.user) {
    var authHeader = req.headers.authorization;

    if (!authHeader) {
      var err = new Error('You are not authenticated!');
      res.setHeader('WWW-Authenticate', 'Basic');
      err.status = 401;
      return next(err);
    }

    var auth = new Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
    var username = auth[0];
    var password = auth[1];

    User.findOne({username: username})
    .then((user) => {
      if (user === null) {
        var err = new Error('User ' + username + ' does not exist!');
        err.status = 403;
        return next(err);
      }
      else if (user.password !== password) {
        var err = new Error('Your password is incorrect!');
        err.status = 403;
        return next(err);
      }
      else if (user.username === username && user.password === password) {
        req.session.user = 'authenticated';
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('You are authenticated!')
      }
    })
    .catch((err) => next(err));
  }
  else {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('You are already authenticated!');
  }
})

router.get('/logout', (req, res) => {
  if (req.session) {
    req.session.destroy();
    res.clearCookie('session-id');
    res.redirect('/');
  }
  else {
    var err = new Error('You are not logged in!');
    err.status = 403;
    next(err);
  }
});

. . .
```

* update _app.js_

```js
. . .

app.use('/', indexRouter);
app.use('/users', usersRouter);

function auth (req, res, next) {
    console.log(req.session);

  if(!req.session.user) {
      var err = new Error('You are not authenticated!');
      err.status = 403;
      return next(err);
  }
  else {
    if (req.session.user === 'authenticated') {
      next();
    }
    else {
      var err = new Error('You are not authenticated!');
      err.status = 403;
      return next(err);
    }
  }
}

. .
```

### Postman test

* POST

  * URL : 

  ```
  http://localhost:3000/users/signup
  ```

  * require body:

  ```json
  {"username":"jay","password":"password"}
  ```

  * response:

  ```json
  {
      "status": "Registration Successful!",
      "user": {
          "admin": false,
          "_id": "5c6a980eba390c42c85d4df3",
          "username": "jay",
          "password": "password",
          "__v": 0
      }
  }
  ```

* POST again

```
<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <link rel="stylesheet" href="/stylesheets/style.css">
    </head>
    <body>
        <h1>User jay already exists!</h1>
        <h2>403</h2>
        <pre>Error: User jay already exists!
    at User.findOne.then (D:\Downloads\FullStackHW\Server-side Development with NodeJS, Express and MongoDB\NodeJS\conFusionServer\routes\users.js:17:17)
    at process._tickCallback (internal/process/next_tick.js:68:7)</pre>
    </body>
</html>
```

* POST login

  * URL:

  ```
  http://localhost:3000/users/login
  ```

  * Response

```
You are authenticated!
```

* GET logout

  * URL

  ```
  http://localhost:3000/users/logout
  ```

  * Response
    * cookies is empty

```
<!DOCTYPE html>
<html>
    <head>
        <title>Express</title>
        <link rel="stylesheet" href="/stylesheets/style.css">
    </head>
    <body>
        <h1>Express</h1>
        <p>Welcome to Express</p>
    </body>
</html>
```



