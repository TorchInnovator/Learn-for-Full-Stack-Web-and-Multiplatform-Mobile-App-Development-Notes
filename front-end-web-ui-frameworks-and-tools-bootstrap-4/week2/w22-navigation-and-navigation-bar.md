# Navigation and Navigation Bar

### Create a basic navigation bar

* Add simple navigation bar so that can be link to other pages on the website

```
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

```
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar">
                <span class="navbar-toggler-icon"></span>
            </button>
```

* 


