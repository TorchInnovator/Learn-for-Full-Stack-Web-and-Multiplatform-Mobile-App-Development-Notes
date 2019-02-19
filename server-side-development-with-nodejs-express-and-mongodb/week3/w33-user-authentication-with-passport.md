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

* 



