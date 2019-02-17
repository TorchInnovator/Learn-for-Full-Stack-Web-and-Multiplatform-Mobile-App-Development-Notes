# REST API with Express, MongoDB and Mongoose Part 1



### Update the Express Application

* Go to the _conFusionServer _folder where you had developed the REST API server using Express generator

* Copy the _models _folder from the _node-mongoose _folder to the _conFusionServer _folder

* install bluebird, mongoose and mongoose-currency

```
     npm install mongoose mongoose-currency --save
```

* _app.js _file and add to connect to the MongoDB

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

* update dishRouter.js

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

  * PUT



