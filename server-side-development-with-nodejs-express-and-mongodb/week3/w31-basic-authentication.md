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

* update \_app.js \_file

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

```
npm start
Connected correctly to server
{ host: 'localhost:3000',
  connection: 'keep-alive',
  'upgrade-insecure-requests': '1',
  'user-agent':
   'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.109 Safari/537.36',
  accept:
   'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
  'accept-encoding': 'gzip, deflate, br',
  'accept-language': 'zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7',
  cookie:
   'csrftoken=L95Zlz58KpGfAFHQJo3lr1IajgwLsgFkYBTKkAdcDaO6vXFfhCCy0lUI3gGNs3H4' }
GET / 401 1352.518 ms - 2982
{ host: 'localhost:3000',
  connection: 'keep-alive',
  authorization: 'Basic YWRtaW46cGFzc3dvcmQ=',
  'upgrade-insecure-requests': '1',
  'user-agent':
   'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.109 Safari/537.36',
  accept:
   'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
  'accept-encoding': 'gzip, deflate, br',
  'accept-language': 'zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7',
  cookie:
   'csrftoken=L95Zlz58KpGfAFHQJo3lr1IajgwLsgFkYBTKkAdcDaO6vXFfhCCy0lUI3gGNs3H4' }
GET / 200 4.424 ms - 142
```

![](/assets/BackendW3_1Authenticated.png)

* Postman

![](/assets/backendW3_1Postman.png)



