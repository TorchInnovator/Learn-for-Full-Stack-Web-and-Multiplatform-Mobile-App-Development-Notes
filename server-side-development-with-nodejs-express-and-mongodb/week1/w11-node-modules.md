## Understanding Node Modules



### Starting a Node Application

* create a folder named _NodeJS and _create a folder named _node-examples _and then move into this folder

* Initialize a package.json file

```
npm init
```

* update the  _package.json _file

```json
{
  "name": "node-examples",
  "version": "1.0.0",
  "description": "Simple Node Examples",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index"
  },
  "author": "Jogesh Muppala",
  "license": "ISC"
}

```

* Create a file named index_.js _and add the following code to this file

```js
var rect = {
	perimeter: (x, y) => (2*(x+y)),
	area: (x, y) => (x*y)
};

function solveRect(l,b) {
    console.log("Solving for rectangle with l = " + l + " and b = " + b);

    if (l <= 0 || b <= 0) {
        console.log("Rectangle dimensions should be greater than zero:  l = "
               + l + ",  and b = " + b);
    }
    else {
	    console.log("The area of the rectangle is " + rect.area(l,b));
	    console.log("The perimeter of the rectangle is " + rect.perimeter(l,b));
    }
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);
```

* run the Node application

```
  npm start
  > node index

Solving for rectangle with l = 2 and b = 4
The area of the rectangle is 8
The perimeter of the rectangle is 12
Solving for rectangle with l = 3 and b = 5
The area of the rectangle is 15
The perimeter of the rectangle is 16
Solving for rectangle with l = 0 and b = 5
Rectangle dimensions should be greater than zero:  l = 0,  and b = 5
Solving for rectangle with l = -3 and b = 5
Rectangle dimensions should be greater than zero:  l = -3,  and b = 5
```

 

### A Simple Node Module

* create a file named _rectangle.js_

```js
exports.perimeter =  (x, y) => (2*(x+y));
exports.area = (x, y) => (x*y);
```

* update _index.js_

```js
var rect = require('./rectangle');
```

# Node Modules: Callbacks and Error Handling

### Using Callbacks and Error Handling

* Update _rectangle.js_

```js
module.exports = (x,y,callback) => {
    if (x <= 0 || y <= 0)
        setTimeout(() => 
            callback(new Error("Rectangle dimensions should be greater than zero: l = "
                + x + ", and b = " + y), 
            null),
            2000);
    else
        setTimeout(() => 
            callback(null, {
                perimeter: () => (2*(x+y)),
                area:() => (x*y)
            }), 
            2000);
}
```

* update _index .js_

```js
. . .

function solveRect(l,b) {
    console.log("Solving for rectangle with l = "
                + l + " and b = " + b);
    rect(l,b, (err,rectangle) => {
        if (err) {
	        console.log("ERROR: ", err.message);
	    }
        else {
            console.log("The area of the rectangle of dimensions l = "
                + l + " and b = " + b + " is " + rectangle.area());
            console.log("The perimeter of the rectangle of dimensions l = "
                + l + " and b = " + b + " is " + rectangle.perimeter());
        }
    });
    console.log("This statement after the call to rect()");
};

. . .
```

* Run the Node application

```
npm start

```



