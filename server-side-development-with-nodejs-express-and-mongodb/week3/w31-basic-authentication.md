### Basic Authentication

### HTTP Basic Access Authentication

* Method for HTTP user agent to provide username and password with a request
* Server can challenge a client to authenticate itself
* Client needs to send the username and password in response

### Basic Access Authentication

![](/assets/BackendW3BAA.png)

### Authorization Header

* The Authorization header is constructed as follows: 
  * Username and password are combined into a string "username:password".
  * The resulting string literal is then encoded using Base64.
  * The authorization method and a space, i.e. "Basic " is then put before the encoded string. 
    * Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==

### Express and Authentication

![](/assets/BackendW3_1EA.png)



---

# Basic Authentication

### Setting up Basic Authentication

* update _app.js _file

```js

. . .

function auth (req, res, next) {
  console.log(req.headers);
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
      next(); // authorized
  } else {
      var err = new Error('You are not authenticated!');
      res.setHeader('WWW-Authenticate', 'Basic');      
      err.status = 401;
      next(err);
  }
}

app.use(auth);

. . .
```

* start the server.

![](/assets/BackendW3_1Authentication.png)





