# Animation and Directives

## Attribute Directives

### Directives

* Angular templates are dynamic
* Directives give instructions to Angular on how to render the templates to the DOM
* A directive can be defined in Angular as a class with the @Directive decorator
* A component is a special kind of directive with a template associated to it
* Two other kinds of directives in Angular: Structural and Attribute

## Custom Attribute Directives

### Adding a New Directive

* Create a new folder named \_directives \_within the app folder

* Using Angular-CLI add a new directive named highlight

```
ng g directive directives/highlight
CREATE src/app/directives/highlight.directive.spec.ts (236 bytes)
CREATE src/app/directives/highlight.directive.ts (147 bytes)
UPDATE src/app/app.module.ts (3238 bytes)
```

* Update highlight.directive.ts

```ts
import { Directive, ElementRef, Renderer2, HostListener  } from '@angular/core';
. . .


  constructor(private el: ElementRef,
    private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.addClass(this.el.nativeElement, 'highlight');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeClass(this.el.nativeElement, 'highlight');
  }

  . . .
```

* add a new scss class in styles.scss

```scss
.highlight {
    background-color: $background-pale;
    border: 1px solid $primary-color-dark;
    z-index: 1;
    transform: scale(1.01);
}
```

* add the new directive in menu.component.html

```html
. . .
      <mat-grid-tile *ngFor="let dish of dishes" [routerLink]="['/dishdetail', dish.id]" appHighlight>
. . .
```



### DEMO

![](/assets/L2W4_3DirectiveDemo.png)

---

##  Angular Animations

* Build animations using Angular with the same kind of native performance as pure CSS animations
* Built on top of the Web Animations API
  * For browsers not supporting the Web Animations API, need to use a polyfill web-animations.min.js
* Tightly integrate the animation logic with the rest of the application code



