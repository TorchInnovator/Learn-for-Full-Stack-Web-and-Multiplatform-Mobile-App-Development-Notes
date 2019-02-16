# Node and HTTP

### A Simple HTTP Server

* Create a folder named node-http in the NodeJS folder and move in the folder

* In the node-http folder, create a subfolder named public.

* initialize a package.json file , and defaults suggested until you end up with a package.json file

```json
{
  "name": "node-http",
  "version": "1.0.0",
  "description": "Node HTTP Module Example",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index"
  },
  "author": "Jogesh Muppala",
  "license": "ISC"
}
```

* Create a file named index_.js_

```js
const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>Hello, World!</h1></body></html>');
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

* Start the server

```
  npm start
```

### Serving HTML Files

* create a file named _index.html_

```html
<html>
<title>This is index.html</title>
<body>
<h1>Index.html</h1>
<p>This is the contents of this file</p>
</body>
</html>
```

* create an aboutus.html file

```html
<html>
<title>This is aboutus.html</title>
<body>
<h1>Aboutus.html</h1>
<p>This is the contents of the aboutus.html file</p>
</body>
</html>
```

* update _index.js_

```js
. . .

const fs = require('fs');
const path = require('path');

. . .

const server = http.createServer((req, res) => {
  console.log('Request for ' + req.url + ' by method ' + req.method);

  if (req.method == 'GET') {
    var fileUrl;
    if (req.url == '/') fileUrl = '/index.html';
    else fileUrl = req.url;

    var filePath = path.resolve('./public'+fileUrl);
    const fileExt = path.extname(filePath);
    if (fileExt == '.html') {
      fs.exists(filePath, (exists) => {
        if (!exists) {
          res.statusCode = 404;
          res.setHeader('Content-Type', 'text/html');
          res.end('<html><body><h1>Error 404: ' + fileUrl + 
                      ' not found</h1></body></html>');
          return;
        }
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream(filePath).pipe(res);
      });
    }
    else {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/html');
      res.end('<html><body><h1>Error 404: ' + fileUrl + 
              ' not a HTML file</h1></body></html>');
    }
  }
  else {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/html');
      res.end('<html><body><h1>Error 404: ' + req.method + 
              ' not supported</h1></body></html>');
  }
})

. . .
```

* Start the server

```
  npm start
```



