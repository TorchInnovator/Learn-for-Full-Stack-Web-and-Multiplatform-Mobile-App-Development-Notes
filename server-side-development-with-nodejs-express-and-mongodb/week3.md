# Mongoose Population

### Using Mongoose Population

* update _user.js_

```js
. . .

var User = new Schema({
    firstname: {
      type: String,
        default: ''
    },
    lastname: {
      type: String,
        default: ''
    },
    admin:   {
        type: Boolean,
        default: false
    }
});

. . .
```

* update \_dishes.js on \_the \_comment \_schema

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
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});

. . .
```

* update \_dishRouter.js on \_the routers and the methods

```js
. . .

dishRouter.route('/')
.get((req,res,next) => {
    Dishes.find({})
    .populate('comments.author')
    .then((dishes) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(dishes);
    }, (err) => next(err))
    .catch((err) => next(err));
})

. . .

dishRouter.route('/:dishId')
.get((req,res,next) => {
    Dishes.findById(req.params.dishId)
    .populate('comments.author')
    .then((dish) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(dish);
    }, (err) => next(err))
    .catch((err) => next(err));
})

. . .

dishRouter.route('/:dishId/comments')
.get((req,res,next) => {
    Dishes.findById(req.params.dishId)
    .populate('comments.author')
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
.post(authenticate.verifyUser, (req, res, next) => {
    Dishes.findById(req.params.dishId)
    .then((dish) => {
        if (dish != null) {
            req.body.author = req.user._id;
            dish.comments.push(req.body);
            dish.save()
            .then((dish) => {
                Dishes.findById(dish._id)
                .populate('comments.author')
                .then((dish) => {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(dish);
                })            
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

. . .

dishRouter.route('/:dishId/comments/:commentId')
.get((req,res,next) => {
    Dishes.findById(req.params.dishId)
    .populate('comments.author')    
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

. . .

.put(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
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
                Dishes.findById(dish._id)
                .populate('comments.author')
                .then((dish) => {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(dish);  
                })              
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
.delete(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    Dishes.findById(req.params.dishId)
    .then((dish) => {
        if (dish != null && dish.comments.id(req.params.commentId) != null) {

            dish.comments.id(req.params.commentId).remove();
            dish.save()
            .then((dish) => {
                Dishes.findById(dish._id)
                .populate('comments.author')
                .then((dish) => {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(dish);  
                })               
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

* update _users.js on the register fun._

```js
. . .

router.post('/signup', (req, res, next) => {
  User.register(new User({username: req.body.username}), 
    req.body.password, (err, user) => {
    if(err) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.json({err: err});
    }
    else {
      if (req.body.firstname)
        user.firstname = req.body.firstname;
      if (req.body.lastname)
        user.lastname = req.body.lastname;
      user.save((err, user) => {
        if (err) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.json({err: err});
          return ;
        }
        passport.authenticate('local')(req, res, () => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json({success: true, status: 'Registration Successful!'});
        });
      });
    }
  });
});

. . .
```

### Postman Test

* mongo to drop users
  ```
  mongo
  > use conFusion
  switched to db conFusion
  > db.users.find()
  { "_id" : ObjectId("5c6a980eba390c42c85d4df3"), "admin" : false, "username" : "jay", "password" : "password", "__v" : 0 }
  { "_id" : ObjectId("5c6bc198112b55440ced7bc2"), "admin" : false, "username" : "jay1", "salt" : "7cc88d3fc98a05e2b99fabac32bc9c78224ae691c2e85fdb4b630dfe07359cff", "hash" : "88f44d3c9d850f68aac11fa48b231f4f6cc1ec960ee1ce4c8b5c90c6bf55b89a73562afa84618303547ce4ea23b6f4d3bed844c0a0040d9e1c216fa0b58930184c61560bc539e3cc2553e7b12bec506d8f69b4d996cde12c5532cd5359d91c8ec47fed1f181a2a183610785e84a0495db60b4dd0f1518fdd81bd22e582302174a11c9b78126fda9b6d466145001342ef71dbb2b10dd1246222d148e62756beecdddcb923c9010c9334e67f3b724aa9045ddb07eef57de505bb61ae0e81d8a5871c793a3d6c3b0b6c431a64cdbe2983381eb1f10171b3a1497d4cc9517e83a52f06a64a6a0fe305b81c8989c95804a77da0156a87f43b2669552b1e2b1ec974c4886a410cfba300e1fe757a4cb9364605b776336fb372edefd0ad696a71da1a812292ae22e008d89cbbdb749c6ace81557b454e874896238eda2df1be7d7f24f8d16434fab5a916cda772e049cbb449d0d6b2f2143933dea054c72c4e15dfe4fc6dd34e166e4d82c55817d8ede9ccda5b35b75f40bc27615af6d374dec05c1267bb0b34980e6c51327e1c9147220293428dff5a209b39918e536cffb8c5dac1ff6632a830ac782a55661d0eb3df327878df0b1a5c42192943a8000e54df8dc9b56af44e5f11ddad8b551b911f620505f2e2a205897263dff163415f54593cb3c15f0aa921d1b526fa988e82c49fa17d238f9b675f5b31d3a255d11d97afc7819f", "__v" : 0 }

  > db.users.drop()
  true
  > db.users.find()
  ```

* POST signup



