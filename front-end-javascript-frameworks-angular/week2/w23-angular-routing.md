# Angular Routing

## Header and Footer

### Using Font Awesome Icons

* use NPM to fetch Font Awesome to the project

```
npm install font-awesome@4.7.0 --save
```

* add a new file named \_variables.scss in the src folder

```
$fa-font-path : '../node_modules/font-awesome/fonts';
```

* update styles.scss file

```scss
. . .

@import 'variables';
@import '../node_modules/font-awesome/scss/font-awesome';

. . .
```

* restart your server

```
ng serve --open
```

### Adding Header and Footer

* Create two new components named header and footer

```
ng generate component header
ng generate component footer
```

* Update the footer's template

```ts
<div class="container footer" 
    fxLayout="row wrap" 
    fxLayout.lt-md="column" 
    fxLayoutAlign="center center" 
    fxLayoutGap="10px">

  <div fxFlex="100" fxFlex.gt-sm="50">
    <div fxLayout="row">
      <div fxFlex="40" fxFlexOffset="20px">
        <h4>Links</h4>
        <mat-list>
          <mat-list-item><a mat-button>Home</a></mat-list-item>
          <mat-list-item><a mat-button>About</a></mat-list-item>
          <mat-list-item><a mat-button>Menu</a></mat-list-item>
          <mat-list-item><a mat-button>Contact</a></mat-list-item>
        </mat-list>
      </div>
      <div fxFlex="55">
        <h4>Our Address</h4>
        <address style="text-size: 80%">
          121, Clear Water Bay Road<br> Clear Water Bay, Kowloon<br> HONG KONG<br>
          <i class="fa fa-phone"></i>: +852 1234 5678<br>
          <i class="fa fa-fax"></i>: +852 8765 4321<br>
          <i class="fa fa-envelope"></i>:
          <a href="mailto:confusion@food.net">confusion@food.net</a>
        </address>
      </div>
    </div>
  </div>
  <div fxFlex="100" fxFlex.gt-sm="45">
    <div style="text-align:center">
      <a mat-icon-button class="btn-google-plus" href="http://google.com/+"><i class="fa fa-google-plus fa-lg"></i></a>
      <a mat-icon-button class="btn-facebook" href="http://www.facebook.com/profile.php?id="><i class="fa fa-facebook fa-lg"></i></a>
      <a mat-icon-button class="btn-linkedin" href="http://www.linkedin.com/in/"><i class="fa fa-linkedin fa-lg"></i></a>
      <a mat-icon-button class="btn-twitter" href="http://twitter.com/"><i class="fa fa-twitter fa-lg"></i></a>
      <a mat-icon-button class="btn-youtube" href="http://youtube.com/"><i class="fa fa-youtube fa-lg"></i></a>
      <a mat-icon-button class="btn-mail" href="mailto:"><i class="fa fa-envelope-o fa-lg"></i></a>
    </div>
  </div>
  <div>
      <p>© Copyright 2018 Ristorante Con Fusion</p>
  </div>
</div>
```

* Update the footer's styles file footer.component.scss

```scss
$lt-gray: #ddd;
$background-dark: #512DA8;
$background-light: #9575CD;
$background-pale: #D1C4E9;

@mixin zero-margin($pad-up-down, $pad-left-right) {
    margin: 0px auto;
    padding: $pad-up-down $pad-left-right;
}

.footer{
    background-color: $background-pale;
    @include zero-margin(20px, 0px);
}

.btn-facebook {color:#fff!important; background-color:#3b5998!important;}
.btn-google-plus{color:#fff!important;background-color:#dd4b39!important;}
.btn-youtube{color:#fff!important;background-color:#ff4b39!important;}
.btn-linkedin{color:#fff!important;background-color:#007bb6!important;}
.btn-twitter{color:#fff!important;background-color:#55acee!important;}
.btn-mail{color:#fff!important;background-color:#512DA8!important;}
```

* Update the header's template

```ts
<mat-toolbar color="primary">
  <span><img src="/assets/images/logo.png" height=30 width=41></span>
  <a mat-button><span class="fa fa-home fa-lg"></span> Home</a>
  <a mat-button><span class="fa fa-info fa-lg"></span> About</a>
  <a mat-button><span class="fa fa-list fa-lg"></span> Menu</a>
  <a mat-button><span class="fa fa-address-card fa-lg"></span> Contact</a>
</mat-toolbar>

<div class="container jumbotron"
    fxLayout="row"
    fxLayout.sm="column" 
    fxLayout.xs="column" 
    fxLayoutAlign.xs="start center"
    fxLayoutAlign.sm="start center" 
    fxLayoutAlign.gt-sm="center center" 
    fxLayoutGap="10px">

  <div fxFlex fxFlex.gt-sm="50%">
    <h1>Ristorante Con Fusion</h1>
    <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations
      will tickle your culinary senses!</p>
  </div>
  <div fxFlex fxFlex.gt-sm="20%">
    <img src="/assets/images/logo.png" alt="Logo">
  </div>
  <div fxFlex></div>
</div>
```

* Update the header's style file header.component.scss

```scss
$lt-gray: #ddd;
$background-dark: #512DA8;
$background-light: #9575CD;
$background-pale: #D1C4E9;

@mixin zero-margin($pad-up-down, $pad-left-right) {
    margin: 0px auto;
    padding: $pad-up-down $pad-left-right;
}

.jumbotron {
    @include zero-margin(70px,30px);
    background: $background-light ;
    color:floralwhite;
    min-height: 150px;
}
```

* Update the project's style file styles.scss

```scss
. . .


$lt-gray: #ddd;
$background-dark: #512DA8;
$background-light: #9575CD;
$background-pale: #D1C4E9;
$primary-color-dark:   #512DA8;
$primary-color:        #673AB7;
$primary-color-light:  #D1C4E9;
$primary-color-text:   #FFFFFF;
$accent-color:         #FFC107;
$primary-text-color:   #212121;
$secondary-text-color: #757575;
$divider-color:        #BDBDBD;

@mixin zero-margin($pad-up-down, $pad-left-right) {
    margin: 0px auto;
    padding: $pad-up-down $pad-left-right;
}

. . .


.background-primary {
    background-color: $background-dark!important;
  }
.background-accent {
    background-color: $accent-color!important;
  }
.text-floral-white {
    color: floralwhite!important;
}

.flex-spacer {
  flex: 1 1 auto;
}
```

* Now update the app.component.html file to include the header and footer

```html
<app-header></app-header>
<app-menu></app-menu>
<app-footer></app-footer>
```

---

## Angular Routing

* Enables navigation among views

  * ses a browser URL as an instruction to navigate to a client-generated view
  * Can also pass along optional 

* HTML5 History API

  * Gives developers the ability to modify a website's URL without a full page refresh

    * pushState\(\): Add history entry

    * replaceState\(\): Modify history entry

    * Configure

* Angular Router

  * Angular router leverages HTML5 history manipulation to modify the browser URL

* Some Angular Router Terms

  * Router Module

    * Routes :  {path: “/home”, component: HomeComponent}

  * routerOutlet

    * &lt;router-outlet&gt;&lt;/router-outlet&gt;

  * routerLink

    * &lt;a routerLink="/menu"&gt;Menu&lt;/a&gt;

---

## Angular Routing Basics

### Adding Components

* Add three new components to your Angular app

```
ng generate component about
CREATE src/app/about/about.component.html (24 bytes)
CREATE src/app/about/about.component.spec.ts (621 bytes)
CREATE src/app/about/about.component.ts (266 bytes)
CREATE src/app/about/about.component.scss (0 bytes)
UPDATE src/app/app.module.ts (1394 bytes)

ng generate component home
CREATE src/app/home/home.component.html (23 bytes)
CREATE src/app/home/home.component.spec.ts (614 bytes)
CREATE src/app/home/home.component.ts (262 bytes)
CREATE src/app/home/home.component.scss (0 bytes)
UPDATE src/app/app.module.ts (1468 bytes)

ng generate component contact
CREATE src/app/contact/contact.component.html (26 bytes)
CREATE src/app/contact/contact.component.spec.ts (635 bytes)
CREATE src/app/contact/contact.component.ts (274 bytes)
CREATE src/app/contact/contact.component.scss (0 bytes)
UPDATE src/app/app.module.ts (1554 bytes)
```

### Add a Router Module

* Add a new module named app-routing

```
ng generate module app-routing
```

* create a new file named \_routes.ts \_in the \_app-routing \_folder

```ts
import { Routes } from '@angular/router';

import { MenuComponent } from '../menu/menu.component';
import { DishdetailComponent } from '../dishdetail/dishdetail.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'menu',     component: MenuComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
```

* Update the `app-routing.module.ts`

```ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { routes } from './routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
```

### Using the Routing Module

* update the `app.component.html`

```html
<app-header></app-header>
<router-outlet></router-outlet>
<app-footer></app-footer>
```

* update the `app.module.ts file`

```ts
. . .

import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  . . .

    imports: [
    . . .,
    AppRoutingModule
  ],

  . . .

})

. . .
```

* update the toolbar in the `header.component.html`

```html
<mat-toolbar color="primary">
  <span><img src="/assets/images/logo.png" height=30 width=41></span>
  <a mat-button routerLink="/home"><span class="fa fa-home fa-lg"></span> Home</a>
  <a mat-button><span class="fa fa-info fa-lg"></span> About</a>
  <a mat-button routerLink="/menu"><span class="fa fa-list fa-lg"></span> Menu</a>
  <a mat-button><span class="fa fa-address-card fa-lg"></span> Contact</a>
</mat-toolbar>

. . .
```



