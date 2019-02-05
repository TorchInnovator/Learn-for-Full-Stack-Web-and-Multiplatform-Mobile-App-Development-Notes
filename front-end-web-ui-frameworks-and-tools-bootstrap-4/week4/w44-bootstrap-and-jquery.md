### Bootstrap and JQuery

* Adding the Carousel Control Buttons

  ```
                  <div class="btn-group" id="carouselButton">
                      <button class="btn btn-danger btn-sm" id="carousel-pause">
                          <span class="fa fa-pause"></span>
                      </button>
                      <button class="btn btn-danger btn-sm" id="carousel-play">
                          <span class="fa fa-play"></span>
                      </button>
                  </div>
  ```

* Adding CSS Class for the Buttons

  ```css
  #carouselButton {
      right:0px;
      position: absolute;
      bottom: 0px;
  }
  ```

* Adding JavaScript Code

  ```js
      <script>
          $(document).ready(function(){
              $("#mycarousel").carousel( { interval: 2000 } );
              $("#carousel-pause").click(function(){
                  $("#mycarousel").carousel('pause');
              });
              $("#carousel-play").click(function(){
                  $("#mycarousel").carousel('cycle');
              });
          });
      </script>
  ```

* Demo

![](/assets/W4_1carousel.png)

---

# More Bootstrap and JQuery

* Modifying the Carousel Control Buttons

  * we use single button that will be paused

  ```html
                      <button class="btn btn-danger btn-sm" id="carouselButton">
                          <span id="carousel-button-icon" class="fa fa-pause"></span>
                      </button>
  ```

* Modifying JavaScript Code

  ```js
              $("#carouselButton").click(function(){
                  if ($("#carouselButton").children("span").hasClass('fa-pause')) {
                      $("#mycarousel").carousel('pause');
                      $("#carouselButton").children("span").removeClass('fa-pause');
                      $("#carouselButton").children("span").addClass('fa-play');
                  }
                  else if ($("#carouselButton").children("span").hasClass('fa-play')){
                      $("#mycarousel").carousel('cycle');
                      $("#carouselButton").children("span").removeClass('fa-play');
                      $("#carouselButton").children("span").addClass('fa-pause');                    
                  }
              });
  ```

* 


