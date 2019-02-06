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



