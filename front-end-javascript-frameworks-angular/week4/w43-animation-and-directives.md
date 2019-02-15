# Animation and Directives

## Angular Animations

* Build animations using Angular with the same kind of native performance as pure CSS animations
* Built on top of the Web Animations API
  * For browsers not supporting the Web Animations API, need to use a polyfill web-animations.min.js
* Tightly integrate the animation logic with the rest of the application code

---

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

## Angular Animations Part 1

### Adding Animation Support

* included the Animation library into Angular application

```
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
```

* dishdetail.component.ts and add the following to it to include various Animation classes

```
import { trigger, state, style, animate, transition } from '@angular/animations';
```

* Define a new animation trigger within the Component decorator

```ts
. . .

@Component({

. . . ,
  animations: [
    trigger('visibility', [
        state('shown', style({
            transform: 'scale(1.0)',
            opacity: 1
        })),
        state('hidden', style({
            transform: 'scale(0.5)',
            opacity: 0
        })),
        transition('* => *', animate('0.5s ease-in-out'))
    ])
  ]

  . . .
})
. . .
```

* update the DishDetailComponent class

```ts
. . .

  visibility = 'shown';
. . .

    this.route.params.pipe(switchMap((params: Params) => { this.visibility = 'hidden'; return this.dishservice.getDish(+params['id']); }))
    .subscribe(dish => { this.dish = dish; this.dishcopy = dish; this.setPrevNext(dish.id); this.visibility = 'shown'; },
      errmess => this.errMess = <any>errmess);
          . . .
```

* update dishdetail.component.html

```html
. . .

  <div fxFlex="40" *ngIf="dish" [@visibility]="visibility">

. . .
  <div fxFlex="40" *ngIf="dish" [@visibility]="visibility">

. . .
```

## Angular Animations Part 2

### Refactoring the Code

* Because we need to multiple animations in application , so refactor code.

* Create a folder named animations in app folder, and create named app.animation.ts in that

* Move dishdetail.component.ts's animation function to app.animation.ts

```ts
import { trigger, state, style, animate, transition } from '@angular/animations';

export function visibility() {
    return trigger('visibility', [
        state('shown', style({
            transform: 'scale(1.0)',
            opacity: 1
        })),
        state('hidden', style({
            transform: 'scale(0.5)',
            opacity: 0
        })),
        transition('* => *', animate('0.5s ease-in-out'))
    ]);
}
```

* update dishdetail.component.ts to make use of the animation factory function defined

```ts
. . .
import { visibility } from '../animations/app.animation';

. . .

  animations: [
    visibility()
  ]
  . . .
```

* Remove the following line from dishdetail.component.ts since it's already included in app.animation.ts

```ts
import { trigger, state, style, animate, transition } from '@angular/animations';
```

### Adding Animation Support for Route Changes

* add a new factory in app.animation.ts

```ts
export function flyInOut() {
    return trigger('flyInOut', [
        state('*', style({ opacity: 1, transform: 'translateX(0)'})),
        transition(':enter', [
            style({ transform: 'translateX(-100%)', opacity: 0 }),
            animate('500ms ease-in')
        ]),
        transition(':leave', [
            animate('500ms ease-out', style({ transform: 'translateX(100%)', opacity: 0}))
        ])
    ]);
}
```

* Import the flyInOut into menu.component.ts and then define a new animation trigger within the Component decorator in menu.component.ts to introduce a view transition when the menu component view is routed to in the application

```ts
. . .
import { flyInOut } from '../animations/app.animation';

. . .
  // tslint:disable-next-line:use-host-property-decorator
  host: {
  '[@flyInOut]': 'true',
  'style': 'display: block;'
  },
  animations: [
    flyInOut()
  ]
  . . .
```

* Apply the same updates to home.component.ts, about.component.ts and contact.component.ts

* Import flyInOut and then add the host property and the flyInOut\(\) also to dishdetail.component.ts

### Animation to Render View from Fetched Data

* Add a new factory in app.animation.ts:

```ts
export function expand() {
    return trigger('expand', [
        state('*', style({ opacity: 1, transform: 'translateX(0)' })),
        transition(':enter', [
            style({ transform: 'translateY(-50%)', opacity:0 }),
            animate('200ms ease-in', style({ opacity: 1, transform: 'translateX(0)' }))
        ])
    ]);
}
```

* import the new function and add the following to the animations in menu.component.ts, about.component.ts, dishdetail.component.ts and home.component.ts

```ts
. . .

import { flyInOut, expand } from '../animations/app.animation';

. . .

  animations: [
    . . .
    expand()
  ]
    . . .
```

* Then apply the \[@expand\] attribute to all those elements within the views of the above components where the data is being fetched from the service before rendering the view.



