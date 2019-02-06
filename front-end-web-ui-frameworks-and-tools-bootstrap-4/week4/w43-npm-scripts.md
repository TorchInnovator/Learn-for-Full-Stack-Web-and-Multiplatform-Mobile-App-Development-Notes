# NPM Scripts Part 1

* create `scripts.js` file
* Open index.html and move Jquery script to`scripts.js`
  ```
  $(document).ready(function () {
      $('[data-toggle="tooltip"]').tooltip();
      $("#mycarousel").carousel({
          interval: 1000
      });
      $("#carouselButton").click(function () {
          if ($("#carouselButton").children("span").hasClass('fa-pause')) {
              $("#mycarousel").carousel('pause');
              $("#carouselButton").children("span").removeClass('fa-pause');
              $("#carouselButton").children("span").addClass('fa-play');
          } else if ($("#carouselButton").children("span").hasClass('fa-play')) {
              $("#mycarousel").carousel('cycle');
              $("#carouselButton").children("span").removeClass('fa-play');
              $("#carouselButton").children("span").addClass('fa-pause');
          }
      });
  });
  ```
* update index.html to include the `scripts.js`
* Add Watching for Changes and Parallelshell

  * install NPM packages:
    ```
    npm install --save-dev onchange@3.3.0 parallelshell@3.0.2
    ```
  * Add script item to package.json

    ```
    "watch:scss": "onchange \"css/*.scss\" -- npm run scss",
    "watch:all": "parallelshell \"npm run watch:scss\" \"npm run lite\""
    "start": "npm run watch:all",
    ```

  * Start watching for changes SCSS file, compile it to Css and run server:

    ```
    npm start
    ```

---

# NPM Scripts Part 2

* Cleaning up a Distribution Folder
  * install rimraf npm module:
    ```
    npm install --save-dev rimraf@2.6.2
    ```
  * set up the script \(package.json\):
    ```
    "copyfonts": "copyfiles -f node_modules/font-awesome/fonts/* dist/fonts",
    ```

* Compressing and Minifying Images:
  * install imagemin-cli npm module
    * help us to compress img to reduce the size

    ```
    npm -g install imagemin-cli@3.0.0
    ```
  * set up the script \(package.json\)
    ```
    "imagemin": "imagemin img/* -o dist/img",
    ```

* Preparing the Distribution Folder
  * add don't want the dist folder to checked into the git repository.
    ```
    node_modules
    dist
    ```
  * install usemin-cli, cssmin, uglifyjs and htmlmin NPM packages
    ```
    npm install --save-dev usemin-cli@0.5.1 cssmin@0.4.3 uglifyjs@2.4.11 htmlmin@0.0.7
    ```
  * set up the script\(package.json\)

    ```
        "usemin": "usemin contactus.html -d dist --htmlmin -o dist/contactus.html && usemin aboutus.html -d dist --htmlmin -o dist/aboutus.html && usemin index.html -d dist --htmlmin -o dist/index.html",
        "build": "npm run clean && npm run imagemin && npm run copyfonts && npm run usemin"  
    ```

  * Add css links inclusion code in index.html, about.html and contactus.html

    ```
    <!-- build:css css/main.css -->
    <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="node_modules/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="node_modules/bootstrap-social/bootstrap-social.css">
    <link href="css/styles.css" rel="stylesheet">
    <!-- endbuild -->
    <!-- build:js js/main.js -->
    <script src="node_modules/jquery/dist/jquery.slim.min.js"></script>
    <script src="node_modules/popper.js/dist/umd/popper.min.js"></script>
    <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="js/scripts.js"></script>
    <!-- endbuild -->
    ```

  * Last npm run build

    * `npm run build`



