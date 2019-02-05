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

  ```html
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





