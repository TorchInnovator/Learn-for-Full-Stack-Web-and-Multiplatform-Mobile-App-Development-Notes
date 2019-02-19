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

* update \_users.js \_file

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

  * URL: [http://localhost:3000/users/signup](http://localhost:3000/users/signup)
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

  * URL : [http://localhost:3000/users/login](http://localhost:3000/users/login)
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
  * URL : [http://localhost:3000/dishes](http://localhost:3000/dishes)
  * Response:\[\]

---

## User Authentication with Passport and JSON Web Token

### Installing passport-jwt and jsonwebtoken Node Modules

* Install the passport-jwt and the jsonwebtoken modules

```
npm install passport-jwt jsonwebtoken --save
```

### Updating the App to use JSON Web Tokens

* Create a new file named config.js

```js
module.exports = {
    'secretKey': '12345-67890-09876-54321',
    'mongoUrl' : 'mongodb://localhost:27017/conFusion'
}
```

### Supporting JSON Web Tokens and Verification

* Update _authenticate.js_

```js
. . .

var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens

var config = require('./config.js');

. . .


exports.getToken = function(user) {
    return jwt.sign(user, config.secretKey,
        {expiresIn: 3600});
};

var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.secretKey;

exports.jwtPassport = passport.use(new JwtStrategy(opts,
    (jwt_payload, done) => {
        console.log("JWT payload: ", jwt_payload);
        User.findOne({_id: jwt_payload._id}, (err, user) => {
            if (err) {
                return done(err, false);
            }
            else if (user) {
                return done(null, user);
            }
            else {
                return done(null, false);
            }
        });
    }));

exports.verifyUser = passport.authenticate('jwt', {session: false});

```

### Controlling Routes with Authentication

* 



