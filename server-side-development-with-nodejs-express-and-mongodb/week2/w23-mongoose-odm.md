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

```js
Dishes.create({
        name: 'Uthapizza',
        description: 'Test'
    })
    .then((dish) => {
        console.log(dish);

        return Dishes.find({}).exec();
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
```

* Run this server to see the result

```
npm start
Connected correctly to server
{ _id: 5c6912d789e18e0dc81a6398,
  name: 'Uthappizza',
  description: 'test',
  createdAt: 2019-02-17T07:52:55.917Z,
  updatedAt: 2019-02-17T07:52:55.917Z,
  __v: 0 }
[ { _id: 5c6912d789e18e0dc81a6398,
    name: 'Uthappizza',
    description: 'test',
    createdAt: 2019-02-17T07:52:55.917Z,
    updatedAt: 2019-02-17T07:52:55.917Z,
    __v: 0 } ]
```

### Adding Sub-documents to a Document

* Update _dishes.js_

```js
. . .

var commentSchema = new Schema({
    rating:  {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    comment:  {
        type: String,
        required: true
    },
    author:  {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

var dishSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    comments:[commentSchema]
}, {
    timestamps: true
});

. . .
```

* Update _index.js_

```js
. . .

    Dishes.create({
        name: 'Uthappizza',
        description: 'test'
    })
    .then((dish) => {
        console.log(dish);

        return Dishes.findByIdAndUpdate(dish._id, {
            $set: { description: 'Updated test'}
        },{ 
            new: true 
        })
        .exec();
    })
    .then((dish) => {
        console.log(dish);

        dish.comments.push({
            rating: 5,
            comment: 'I\'m getting a sinking feeling!',
            author: 'Leonardo di Carpaccio'
        });

        return dish.save();
    })
    .then((dish) => {
        console.log(dish);

        return Dishes.remove({});
    })
    .then(() => {
        return mongoose.connection.close();
    })
    .catch((err) => {
        console.log(err);
    });

. . .
```

* Run this server to see the result 

```
npm start
Connected correctly to server
{ _id: 5c6913814ee2ab2b1c61d65e,
  name: 'Uthappizza',
  description: 'test',
  comments: [],
  createdAt: 2019-02-17T07:55:45.035Z,
  updatedAt: 2019-02-17T07:55:45.035Z,
  __v: 0 }
(node:11036) DeprecationWarning: collection.findAndModify is deprecated. Use findOneAndUpdate, findOneAndReplace or findOneAndDelete instead.
{ _id: 5c6913814ee2ab2b1c61d65e,
  name: 'Uthappizza',
  description: 'Updated test',
  comments: [],
  createdAt: 2019-02-17T07:55:45.035Z,
  updatedAt: 2019-02-17T07:55:46.052Z,
  __v: 0 }
{ _id: 5c6913814ee2ab2b1c61d65e,
  name: 'Uthappizza',
  description: 'Updated test',
  comments:
   [ { _id: 5c6913824ee2ab2b1c61d65f,
       rating: 5,
       comment: 'I\'m getting a sinking feeling!',
       author: 'Leonardo di Carpaccio',
       createdAt: 2019-02-17T07:55:46.065Z,
       updatedAt: 2019-02-17T07:55:46.065Z } ],
  createdAt: 2019-02-17T07:55:45.035Z,
  updatedAt: 2019-02-17T07:55:46.065Z,
  __v: 1 }
```





