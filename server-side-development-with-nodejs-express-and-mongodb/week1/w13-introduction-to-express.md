### Introduction to Express

### A Simple Server using Express

* Create a folder named \_node-express \_in the \_NodeJS \_folder and move to that folder

* Copy the \_public \_folder from \_node-http \_to this folder

* initialize a package.json file

```
npm init
```

* defaults suggested until you end up with a package.json file
* install the Express framework

* Create a file named .gitignore

* Create a file named _index.js_

* Start the server



### Serving Static Files

* Install _morgan_

* Update _index.js_

```js
. . .

const morgan = require('morgan');

. . .

app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

. . .
```



