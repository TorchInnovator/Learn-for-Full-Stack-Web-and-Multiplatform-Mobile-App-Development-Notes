## Mongoose ODM Part 1

### Installing Mongoose

* Create a folder named _node-mongoose_

* initialize a package.json file

```
{
  "name": "node-mongoose",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index"
  },
  "author": "Jogesh Muppala",
  "license": "ISC"
}
```

* install Mongoose

```
npm install mongoose --save
```

### Implementing a Node Application

* Create a sub-folder named \_models \_in the \_node-mongoose \_folder

* Create a file named \_dishes.js \_and add a Mongoose schema

```js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dishSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    }
},{
    timestamps: true
});

var Dishes = mongoose.model('Dish', dishSchema);

module.exports = Dishes;
```

* Move to the _node-mongoose \_folder and create a file named \_index.js _

```js
const mongoose = require('mongoose');

const Dishes = require('./models/dishes');

const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url);

connect.then((db) => {

    console.log('Connected correctly to server');

    var newDish = Dishes({
        name: 'Uthappizza',
        description: 'test'
    });

    newDish.save()
        .then((dish) => {
            console.log(dish);

            return Dishes.find({});
        })
        .then((dishes) => {
            console.log(dishes);

            return Dishes.remove({});
        })
        .then(() => {
            return mongoose.connection.close();
        })
        .catch((err) => {
            console.log(err);
        });

});
```

* start the server

```
npm start
Connected correctly to server
{ _id: 5c6910ea83c0611e8cf5d14c,
  name: 'Uthappizza',
  description: 'test',
  createdAt: 2019-02-17T07:44:42.747Z,
  updatedAt: 2019-02-17T07:44:42.747Z,
  __v: 0 }
[ { _id: 5c6910ea83c0611e8cf5d14c,
    name: 'Uthappizza',
    description: 'test',
    createdAt: 2019-02-17T07:44:42.747Z,
    updatedAt: 2019-02-17T07:44:42.747Z,
    __v: 0 } ]
(node:7820) DeprecationWarning: collection.remove is deprecated. Use deleteOne, deleteMany, or bulkWrite instead.
```



# Mongoose ODM Part 2

### Mongoose Operations

* Update _index.js_

* 



