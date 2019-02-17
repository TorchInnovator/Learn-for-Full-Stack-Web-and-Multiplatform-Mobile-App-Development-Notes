# REST API with Express, MongoDB and Mongoose Part 1

### Update the Express Application

* Go to the \_conFusionServer \_folder where you had developed the REST API server using Express generator

* Copy the \_models \_folder from the \_node-mongoose \_folder to the \_conFusionServer \_folder

* install bluebird, mongoose and mongoose-currency

```
     npm install mongoose mongoose-currency --save
```

* \_app.js \_file and add to connect to the MongoDB

```
. . .

const mongoose = require('mongoose');

const Dishes = require('./models/dishes');

const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url);

connect.then((db) => {
    console.log("Connected correctly to server");
}, (err) => { console.log(err); });

. . .
```

* update dishes.js

```js
. . .

require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

. . .

const dishSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    label: {
        type: String,
        default: ''
    },
    price: {
        type: Currency,
        required: true,
        min: 0
    },
    featured: {
        type: Boolean,
        default:false      
    },
    comments:[commentSchema]
}, {
    timestamps: true
});

. . .
```

* update dishRouter.js

```js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Dishes = require('../models/dishes');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.get((req,res,next) => {
    Dishes.find({})
    .then((dishes) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(dishes);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    Dishes.create(req.body)
    .then((dish) => {
        console.log('Dish Created ', dish);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(dish);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
})
.delete((req, res, next) => {
    Dishes.remove({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));    
});

dishRouter.route('/:dishId')
.get((req,res,next) => {
    Dishes.findById(req.params.dishId)
    .then((dish) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(dish);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /dishes/'+ req.params.dishId);
})
.put((req, res, next) => {
    Dishes.findByIdAndUpdate(req.params.dishId, {
        $set: req.body
    }, { new: true })
    .then((dish) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(dish);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete((req, res, next) => {
    Dishes.findByIdAndRemove(req.params.dishId)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

module.exports = dishRouter;
```

* start server

  * GET:

    * response: \[\]  , because we are not add data in server

  * POST

    * require body:

    ```json
    {
          "name": "Uthappizza",
          "image": "images/uthappizza.png",
          "category": "mains",
          "label": "Hot",
          "price": "4.99",
          "featured": "true",
          "description": "A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.",
          "comments": [
            {
              "rating": 5,
              "comment": "Imagine all the eatables, living in conFusion!",
              "author": "John Lemon",
              "date": "2012-10-16T17:57:28.556094Z"
            },
            {
              "rating": 4,
              "comment": "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
              "author": "Paul McVites",
              "date": "2014-09-05T17:57:28.556094Z"
            },
            {
              "rating": 3,
              "comment": "Eat it, just eat it!",
              "author": "Michael Jaikishan",
              "date": "2015-02-13T17:57:28.556094Z"
            },
            {
              "rating": 4,
              "comment": "Ultimate, Reaching for the stars!",
              "author": "Ringo Starry",
              "date": "2013-12-02T17:57:28.556094Z"
            },
            {
              "rating": 2,
              "comment": "It's your birthday, we're gonna party!",
              "author": "25 Cent",
              "date": "2011-12-02T17:57:28.556094Z"
            }
          ]
        }
    ```

    * response

    ```json
    {
        "label": "Hot",
        "featured": true,
        "_id": "5c691c0f7fa45e14a0f462c7",
        "name": "Uthappizza",
        "image": "images/uthappizza.png",
        "category": "mains",
        "price": 499,
        "description": "A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.",
        "comments": [
            {
                "_id": "5c691c0f7fa45e14a0f462cc",
                "rating": 5,
                "comment": "Imagine all the eatables, living in conFusion!",
                "author": "John Lemon",
                "createdAt": "2019-02-17T08:32:15.376Z",
                "updatedAt": "2019-02-17T08:32:15.376Z"
            },
            {
                "_id": "5c691c0f7fa45e14a0f462cb",
                "rating": 4,
                "comment": "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                "author": "Paul McVites",
                "createdAt": "2019-02-17T08:32:15.376Z",
                "updatedAt": "2019-02-17T08:32:15.376Z"
            },
            {
                "_id": "5c691c0f7fa45e14a0f462ca",
                "rating": 3,
                "comment": "Eat it, just eat it!",
                "author": "Michael Jaikishan",
                "createdAt": "2019-02-17T08:32:15.376Z",
                "updatedAt": "2019-02-17T08:32:15.376Z"
            },
            {
                "_id": "5c691c0f7fa45e14a0f462c9",
                "rating": 4,
                "comment": "Ultimate, Reaching for the stars!",
                "author": "Ringo Starry",
                "createdAt": "2019-02-17T08:32:15.376Z",
                "updatedAt": "2019-02-17T08:32:15.376Z"
            },
            {
                "_id": "5c691c0f7fa45e14a0f462c8",
                "rating": 2,
                "comment": "It's your birthday, we're gonna party!",
                "author": "25 Cent",
                "createdAt": "2019-02-17T08:32:15.376Z",
                "updatedAt": "2019-02-17T08:32:15.376Z"
            }
        ],
        "createdAt": "2019-02-17T08:32:15.377Z",
        "updatedAt": "2019-02-17T08:32:15.377Z",
        "__v": 0
    }
    ```

# REST API with Express, MongoDB and Mongoose Part 2

### Handling Comments

* Add handle comments to _dishRouter.js_

```js
. . .

dishRouter.route('/:dishId/comments')
.get((req,res,next) => {
    Dishes.findById(req.params.dishId)
    .then((dish) => {
        if (dish != null) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(dish.comments);
        }
        else {
            err = new Error('Dish ' + req.params.dishId + ' not found');
            err.status = 404;
            return next(err);
        }
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    Dishes.findById(req.params.dishId)
    .then((dish) => {
        if (dish != null) {
            dish.comments.push(req.body);
            dish.save()
            .then((dish) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(dish);                
            }, (err) => next(err));
        }
        else {
            err = new Error('Dish ' + req.params.dishId + ' not found');
            err.status = 404;
            return next(err);
        }
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes/'
        + req.params.dishId + '/comments');
})
.delete((req, res, next) => {
    Dishes.findById(req.params.dishId)
    .then((dish) => {
        if (dish != null) {
            for (var i = (dish.comments.length -1); i >= 0; i--) {
                dish.comments.id(dish.comments[i]._id).remove();
            }
            dish.save()
            .then((dish) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(dish);                
            }, (err) => next(err));
        }
        else {
            err = new Error('Dish ' + req.params.dishId + ' not found');
            err.status = 404;
            return next(err);
        }
    }, (err) => next(err))
    .catch((err) => next(err));    
});

dishRouter.route('/:dishId/comments/:commentId')
.get((req,res,next) => {
    Dishes.findById(req.params.dishId)
    .then((dish) => {
        if (dish != null && dish.comments.id(req.params.commentId) != null) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(dish.comments.id(req.params.commentId));
        }
        else if (dish == null) {
            err = new Error('Dish ' + req.params.dishId + ' not found');
            err.status = 404;
            return next(err);
        }
        else {
            err = new Error('Comment ' + req.params.commentId + ' not found');
            err.status = 404;
            return next(err);            
        }
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /dishes/'+ req.params.dishId
        + '/comments/' + req.params.commentId);
})
.put((req, res, next) => {
    Dishes.findById(req.params.dishId)
    .then((dish) => {
        if (dish != null && dish.comments.id(req.params.commentId) != null) {
            if (req.body.rating) {
                dish.comments.id(req.params.commentId).rating = req.body.rating;
            }
            if (req.body.comment) {
                dish.comments.id(req.params.commentId).comment = req.body.comment;                
            }
            dish.save()
            .then((dish) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(dish);                
            }, (err) => next(err));
        }
        else if (dish == null) {
            err = new Error('Dish ' + req.params.dishId + ' not found');
            err.status = 404;
            return next(err);
        }
        else {
            err = new Error('Comment ' + req.params.commentId + ' not found');
            err.status = 404;
            return next(err);            
        }
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete((req, res, next) => {
    Dishes.findById(req.params.dishId)
    .then((dish) => {
        if (dish != null && dish.comments.id(req.params.commentId) != null) {
            dish.comments.id(req.params.commentId).remove();
            dish.save()
            .then((dish) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(dish);                
            }, (err) => next(err));
        }
        else if (dish == null) {
            err = new Error('Dish ' + req.params.dishId + ' not found');
            err.status = 404;
            return next(err);
        }
        else {
            err = new Error('Comment ' + req.params.commentId + ' not found');
            err.status = 404;
            return next(err);            
        }
    }, (err) => next(err))
    .catch((err) => next(err));
});

. . .
```

* Start Server



  




