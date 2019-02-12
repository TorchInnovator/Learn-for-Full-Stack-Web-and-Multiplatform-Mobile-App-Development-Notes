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

* install _angular-cli_globally

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

* create a folder named _Angular _and move into that folder.

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



