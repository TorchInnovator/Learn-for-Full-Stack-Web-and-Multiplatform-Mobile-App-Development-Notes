# Introduction to MongoDB

### [ ](https://www.coursera.org/learn/server-side-nodejs/supplement/7jj0w/introduction-to-mongodb-objectives-and-outcomes)Downloading and Installing MongoDB

* download and install MongoDB as per the instructions

* Create a folder named _mongodb _on your computer and create a subfolder under it named _data_

* Move to the _mongodb _folder and then start the MongoDB server0

```
     mongod --dbpath=data --bind_ip 127.0.0.1
```

* Open another command window and start the mongo REPL shell

```
mongo
```

* the Mongo REPL prompt

```
     db
     use conFusion
     db
     db.help()
```

* create a collection named dishes, and insert a new dish document

```
     db.dishes.insert({ name: "Uthappizza", description: "Test" });
```

* print out the dishes in the collection

```
     db.dishes.find().pretty();
```

* learn the information encoded into the ObjectId

```
     var id = new ObjectId();
     id.getTimestamp();
```

---

## Node and MongoDB

### Installing the Node MongoDB Driver Module

* Create a new folder named _node-mongo_

* initialize a package.json file



* nstall the Node MongoDB driver and the Assert module

```
     npm install mongodb@3.0.10 --save
     npm install assert@1.4.1 --save

```

### A Simple Node-MongoDB Application

* Create a new file named _index.js_

```js
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017/';
const dbname = 'conFusion';

MongoClient.connect(url, (err, client) => {

    assert.equal(err,null);

    console.log('Connected correctly to server');

    const db = client.db(dbname);
    const collection = db.collection("dishes");
    collection.insertOne({"name": "Uthappizza", "description": "test"},
    (err, result) => {
        assert.equal(err,null);

        console.log("After Insert:\n");
        console.log(result.ops);

        collection.find({}).toArray((err, docs) => {
            assert.equal(err,null);
            
            console.log("Found:\n");
            console.log(docs);

            db.dropCollection("dishes", (err, result) => {
                assert.equal(err,null);

                client.close();
            });
        });
    });

});
```

* start the server  



