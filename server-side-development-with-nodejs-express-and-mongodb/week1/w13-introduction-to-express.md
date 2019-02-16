### Introduction to Express

### A Simple Server using Express

* Create a folder named _node-express _in the _NodeJS _folder and move to that folder

* Copy the _public _folder from _node-http _to this folder

* initialize a package.json file

```
npm init
```

* defaults suggested until you end up with a package.json file

```json
{
"name": "node-express",
"version": "1.0.0",
"description": "Node Express Examples",
"main": "index.js",
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1",
"start": "node index"
},
"author": "Jogesh Muppala",
"license": "ISC"
}

```

* install the Express framework

```
npm install express --save
```

* Create a file named .gitignore

```
node_modules
```

* Create a file named _index.js_

const express = require('express'),
http = require('http');

const hostname = 'localhost';
const port = 3000;

const app = express();

app.use((req, res, next) => {
console.log(req.headers);
res.statusCode = 200;
res.setHeader('Content-Type', 'text/html');
res.end('<html><body><h1>This is an Express Server</h1></body></html>');

});

const server = http.createServer(app);

server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
});

* Start the server

```
npm start
```

### Serving Static Files

* Install _morgan_

```
npm install morgan --save
```

* Update _index.js_

```js
. . .

const morgan = require('morgan');

. . .

app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

. . .
```

* Start the server

```
npm start

```

# Express Router