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



* Update the footer's template



* Update the footer's styles file footer.component.scss



* Update the header's template



* Update the header's style file header.component.scss



* Update the project's style file styles.scss



* Now update the app.component.html file to include the header and footer



