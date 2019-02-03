# Navigation and Navigation Bar

### Create a basic navigation bar

* Add simple navigation bar so that can be link to other pages on the website

```html
    <nav class="navbar navbar-dark navbar-expand-sm bg-primary fixed-top">
        <div class="container">
           <a class="navbar-brand" href="#">Ristorante Con Fusion</a>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active"><a class="nav-link" href="#">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="./aboutus.html">About</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Menu</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
                </ul>            
        </div>
    </nav>
```

### Creating a responsive navigation bar

* Because we want to be replaced by a toggle button so that the items can be toggled on or off when required on small and extra small screens, so add this code to the nav bar

```html
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar">
                <span class="navbar-toggler-icon"></span>
            </button>
```

* To hide itmes from nav bar for small screens

```html
            <div class="collapse navbar-collapse" id="Navbar">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active"><a class="nav-link" href="#">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="./aboutus.html">About</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Menu</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
                </ul>           
            </div>
```

### Modifications to the CSS styles

* add these code to mystyles.css

```css
body{
    padding:50px 0px 0px 0px;
    z-index:0;
}

.navbar-dark {
     background-color: #512DA8;
}
```

# Demo

![](front-end-web-ui-frameworks-and-tools-bootstrap-4/assets/W2_1Demo.png)

---

# Icon Fonts

### Using Icon Fonts and Other CSS classes

* install font toolkit and Bootstrap Social button in our website

```
npm install font-awesome@4.7.0 --save
npm install bootstrap-social@5.1.1 --save
```

* And link css to your page

```html
    <link rel="stylesheet" href="node_modules/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="node_modules/bootstrap-social/bootstrap-social.css">
```

* change your index.html and aboutus.html's ul list item
* ```html
  <li class="nav-item active"><a class="nav-link" href="#"><span class="fa fa-home fa-lg"></span> Home</a></li>
  <li class="nav-item"><a class="nav-link" href="./aboutus.html"><span class="fa fa-info fa-lg"></span> About</a></li>
  <li class="nav-item"><a class="nav-link" href="#"><span class="fa fa-list fa-lg"></span> Menu</a></li>
  <li class="nav-item"><a class="nav-link" href="#"><span class="fa fa-address-card fa-lg"></span> Contact</a></li>
  ```

  * Demo

  ![](/front-end-web-ui-frameworks-and-tools-bootstrap-4/assets/W2_1AddFontToNav.png)

* Both index and aboutus html page , go to footer of page and add font like this:

  * ```html
    <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-4 offset-1 col-sm-2">
                        <h5>Links</h5>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="./aboutus.html">About</a></li>
                            <li><a href="#">Menu</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div class="col-7 col-sm-5">
                        <h5>Our Address</h5>
                        <address>
                            121, Clear Water Bay Road<br>
                            Clear Water Bay, Kowloon<br>
                            HONG KONG<br>
                          <i class="fa fa-phone fa-lg"></i>: +852 1234 5678<br>
                          <i class="fa fa-fax fa-lg"></i>: +852 8765 4321<br>
                          <i class="fa fa-envelope fa-lg"></i>: 
                          <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                    </div>
                    <div class="col-12 col-sm-4">
                        <div>
                            <a href="http://google.com/+">Google+</a>
                            <a href="http://www.facebook.com/profile.php?id=">Facebook</a>
                            <a href="http://www.linkedin.com/in/">LinkedIn</a>
                            <a href="http://twitter.com/">Twitter</a>
                            <a href="http://youtube.com/">YouTube</a>
                            <a href="mailto:">Mail</a>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-auto">
                        <p>© Copyright 2018 Ristorante Con Fusion</p>
                    </div>
                </div>
            </div>
        </footer>
    ```
  * Demo

![](/front-end-web-ui-frameworks-and-tools-bootstrap-4/assets/W2_1AddFontToFooter.png)

