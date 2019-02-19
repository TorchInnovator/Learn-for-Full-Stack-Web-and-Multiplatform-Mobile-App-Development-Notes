# User Authentication with Passport

### Installing Passport

* Install the Passport and related Node modules

```
     npm install passport passport-local passport-local-mongoose --save
```

### Updating User Schema and Model

* update _user.js_

```js
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
    admin:   {
        type: Boolean,
        default: false
    }
});

User.plugin(passportLocalMongoose);
```

### Adding Passport-based Authentication

* Add a new file named  _authenticate.js_

```js
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('./models/user');

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
```

* update _users.js _file

```js
. . .

var passport = require('passport');

. . .


router.post('/signup', (req, res, next) => {
  User.register(new User({username: req.body.username}), 
    req.body.password, (err, user) => {
    if(err) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.json({err: err});
    }
    else {
      passport.authenticate('local')(req, res, () => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({success: true, status: 'Registration Successful!'});
      });
    }
  });
});

router.post('/login', passport.authenticate('local'), (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json({success: true, status: 'You are successfully logged in!'});
});

. . .
```

* update _app.js_

```js
. . .

var passport = require('passport');
var authenticate = require('./authenticate');

. . .

app.use(passport.initialize());
app.use(passport.session());

. . .

function auth (req, res, next) {
    console.log(req.user);

    if (!req.user) {
      var err = new Error('You are not authenticated!');
      err.status = 403;
      next(err);
    }
    else {
          next();
    }
}

. . .
```

### Postman Test

* POST signup
  * URL: http://localhost:3000/users/signup
  * Body:

  ```json
  {"username":"jay1","password":"password"}
  ```

  * Response

  ```json
  {
      "success": true,
      "status": "Registration Successful!"
  }
  ```

* POST login
  * URL : http://localhost:3000/users/login
  * Body:

  ```json
  {"username":"jay1","password":"password"}
  ```

  * Response:

  ```json
  {
      "success": true,
      "status": "You are successfully logged in!"
  }
  ```

  * Session id:

  ```json
  session-id=s%3A2Dss5IAcLK1xIEH3Pgf4qcQQLxvvx-2B.499ch4kuv%2B7VBa%2BuVQ%2BcGjHNye0LVJk896bnMMPQzJc; path=/; domain=localhost; HttpOnly; Expires=Tue, 19 Jan 2038 03:14:07 GMT;
  ```
* GET dishes
  * URL : http://localhost:3000/dishes
  * Response:\[\]



