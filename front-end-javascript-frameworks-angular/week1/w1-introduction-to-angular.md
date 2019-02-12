# Introduction to Angular

## Font-end JavaScript Frameworks Overview

* JavaScript Frameworks

  * Complexity of managing DOM manipulation and data updates manually

  * Application architectures

    * Model-View-Controller \(MVC\)

    * Model-View- ViewModel \(MVVM\)

    * Model-View-Whatever

* Software Library

  * Collection of implementations of behavior with a well-defined interface by which the behavior is invoked

  * Reuse of behavior

  * Modularity

* Software Framework

  * Abstraction in which software provides generic functionality that can be selectively changed by additional user-written code

  * Universal, reusable environment that provides particular functionality as part of a larger software platform

  * e.g : Angular, Ember, Backbone

* ** Library vs Framework**

  * Library

    * a collection of functions which are useful when writing web apps. Your code is in charge and it calls into the library when it sees fit.

    * E.g., jQuery.

  * Frameworks

    * a particular implementation of a web application, where your code fills in the details. The framework is in charge and it calls into your code when it needs something app specific.

    * E.g., Angular, Ember, etc

---

# Getting Started with Angular

### Installing_Angular-CLI_

* install \_angular-cli\_globally

```
npm install -g @angular/cli
```

* make sure install is fine:

```
ng help
vailable Commands:
  add Add support for a library to your project.
  build (b) Builds your app and places it into the output path (dist/ by default).
  config Get/set configuration values.
  doc (d) Opens the official Angular API documentation for a given keyword.
  e2e (e)
  generate (g) Generates and/or modifies files based on a schematic.
  help Displays help for the Angular CLI.
  lint (l) Lints code in existing project.
  new (n) Creates a new directory and a new Angular app.
  run Runs Architect targets.
  serve (s) Builds and serves your app, rebuilding on file changes.
  test (t) Run unit tests in existing project.
  update Updates your application and its dependencies.
  version (v) Outputs Angular CLI version.
  xi18n Extracts i18n messages from source code.

For more detailed help run "ng [command name] --help"
```

### Generating and Serving an Angular Project using Angular-CLI

* create a folder named \_Angular \_and move into that folder.

```
mkdir Angular
cd Angular
```

* create a new Angular application named _conFusion_

```
ng new conFusion --style=scss
```

* Move to the conFusion folder and Start server:

```
ng serve --open
```

---

# Configuring your Angular Application

### Configure your Angular Project to use Angular Material

* To configure project to use Angular material, install Angular Materia, Angular Animations and HammerJS

```
npm install @angular/material@6.4.7 --save
npm install @angular/cdk@6.4.7 --save
npm install --save @angular/animations@6.1.7
npm install --save hammerjs@2.0.8
```

### Configure to use Material Design Icons

* add Material Design icons in &lt;head&gt;

```
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"><link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

### Configure your Angular Project to use Flex Layout

* Install Angular Flex Layout

```
npm install --save @angular/flex-layout@6.0.0-beta.18
```

### Updating AppModule

* import the Angular Animation Module, Angular Material Toolbar Module, Flex Layout Module and hammerjs into your root module \(src/app/app.module.ts\)

```
. . . 

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { FlexLayoutModule } from '@angular/flex-layout';

. . . 

import 'hammerjs';

@NgModule({

  . . . 

  imports: [ 

    . . .,

    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule

  ], 

    . . . 


}) 

. . .
```

### Adding a Material Toolbar

* In app.component.html and replace its contents 

```
<mat-toolbar color="primary"> <span>Ristorante Con Fusion</span> </mat-toolbar>
```

### Adding Styles

* Add styles to styles.scss file

```
@import '~@angular/material/prebuilt-themes/deeppurple-amber.css';

// some basic resets 

body { 
  padding: 0; 
  margin: 0; 
  font-family: Roboto, sans-serif; 

}
```

* Demo![](/assets/L2W1IntroductionStyleCss.png)



