# Express Generator

### Installing express-generator

* Install _express-generator_

```
npm install express-generator
```

### 

### Scaffolding an Express Application

* To scaffold out an Express application

```
express conFusionServer
```

* move to the _conFusionServer _folder and install npm

```
npm install
```

* start the Express server

```
npm start
> confusionserver@0.0.0 start D:\Downloads\FullStackHW\Server-side Development with NodeJS, Express and MongoDB\NodeJS\conFusionServer
> node ./bin/www

GET / 200 290.458 ms - 170
GET /stylesheets/style.css 200 6.689 ms - 111
```

* Add a file named _.gitignore_

```
node_modules
```

### 

### Implementing a REST API

* copy the_dishRouter.js_,_promoRouter.js _and _leaderRouter.js _from  assignment

* copy the index.html and aboutus.html file from the _node-express/public _folder to the _public _folder in new project

* update app.js file

```js
. . .

var dishRouter = require('./routes/dishRouter');
var promoRouter = require('./routes/promoRouter');
var leaderRouter = require('./routes/leaderRouter');

. . .

app.use('/dishes',dishRouter);
app.use('/promotions',promoRouter);
app.use('/leaders',leaderRouter);

. . .
```

* run sever



