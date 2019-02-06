# NPM Scripts Part 1

* create `scripts.js` file
* Open index.html and move Jquery script to` scripts.js`
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



