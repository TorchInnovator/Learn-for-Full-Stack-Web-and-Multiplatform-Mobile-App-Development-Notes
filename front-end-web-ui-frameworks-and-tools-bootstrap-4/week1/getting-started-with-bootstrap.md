# Getting Started with Bootstrap

### Setting up the Project Folder

* Download [Booststrap4.zip](https://d3c33hcgiwev3.cloudfront.net/bOGnMCzEEeiTdA5yoE99Fg_6da6f2f02cc411e8b484f7e801bd0278_Bootstrap4-starter.zip?Expires=1549065600&Signature=GAuN1vXJ8gzranYWkp-IH58xD7TKjfyadqaW9Ad0v2TixZnU4ZKDmOhe05P5grtGWmzNBYVQn1O0iEIm4kkw3FkOxnrNQE9CIqa7gk3iRZCAkdpKsQApdTrJF~Az~v-2fKY-DSkaRXJCTWpdbZnuvW7F1bCCYMMwnIC7LC8DiBY_&Key-Pair-Id=APKAJLTNE6QMUY6HBC5A)

* cmd move to conFusion folder and install lite-server

  ```
   npm install
  ```

* Installing an NPM Module - lite server

  ```
  npm install lite-server --save-dev
  ```

* ignore file with the content \(node\_modules\)

### Downloading Bootstrap

* Bootstrap will depend Jquery and Poper.js, so need to install they

  * ```
    npm install bootstrap@4.0.0 --save
    npm install jquery@3.3.1 popper.js@1.12.9 --save
    ```

* then start lite-server by`npm start`command

### Getting your Web page Bootstrap ready

* In index.html add this code to link Bootstrap.css and jquery.js

  * code 

  ```
  <!-- Required meta tags always come first -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta http-equiv="x-ua-compatible" content="ie=edge">

  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">

  <!-- jQuery first, then Popper.js, then Bootstrap JS. -->
  <script src="node_modules/jquery/dist/jquery.slim.min.js"></script>
  <script src="node_modules/popper.js/dist/umd/popper.min.js"></script>
  <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
  ```

  * berfore we add this html web look like this:![](/assets/W1_2beforeAddLink.png)

  * after add:![](/assets/W1_2afterAddLink.png)



