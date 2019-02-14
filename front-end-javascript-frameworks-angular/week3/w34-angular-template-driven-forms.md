# Angular Template-driven Forms

## Angular and RxJS

### The Observer Pattern

* Software-engineering pattern

  * Gang of four

* Observable \(subject\) tracks observers

* Observable notifies observers of state changes

### Observables

* Streams

* Can be unsubscribed

* Lazy, or cold until some observer does a .subscribe\(\)

* Canceling and retrial straightforward

### Reactive Programming

* Data flows: how does data flow through your application?

* Propagation of change through your application

* Built around “streams”

* Functional Reactive Programming

  * Functional + Reactive

### RxJS

* Library for composing asynchronous and event-based programs by using observable sequences.
* Provides:
  * one core type, the Observable,
  * satellite types \(Observer, Schedulers, Subjects\), and
  * operators inspired by Array\#extras \(map, filter, reduce, every, etc\)
  * to allow handling asynchronous events as collections.
* Used for observables support in Angular

### Observables, Operators and Marble Diagrams![](blob:file:///5b6df3a2-0aba-4a14-ad9a-330f23a16df6)

### Angular and RxJS

* Observables all over Angular

  * Forms

  * HTTP

  * AsyncPipe

  * Change detection

  ![](blob:file:///23f933f5-78db-424c-a0f2-bdbeccd7021c)

---

## Angular and RxJS Part 1[ ](https://www.coursera.org/learn/angular/supplement/VsHr0/angular-template-driven-forms-objectives-and-outcomes)

### Updating the Services

* update the services to operate using observables and then convert them to promises and deliver to the components in dish.service.ts

```ts
. . .

import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

. . .

  getDishes(): Promise<Dish[]> {
    return of(DISHES).pipe(delay(2000)).toPromise();
  }

  getDish(id: number): Promise<Dish> {
    return of(DISHES.filter((dish) => (dish.id === id))[0]).pipe(delay(2000)).toPromise();
  }

  getFeaturedDish(): Promise<Dish> {
    return of(DISHES.filter((dish) => dish.featured)[0]).pipe(delay(2000)).toPromise();
  }
}
```

* Similarly update leader.service.ts and promotion.service.ts

* update the dish.service.ts

```ts
. . .

import { Observable, of } from 'rxjs';

. . .

  getDishes(): Observable<Dish[]> {
    return of(DISHES).pipe(delay(2000));
  }

  getDish(id: number): Observable<Dish> {
    return of(DISHES.filter((dish) => (dish.id === id))[0]).pipe(delay(2000));
  }

  getFeaturedDish(): Observable<Dish> {
    return of(DISHES.filter((dish) => dish.featured)[0]).pipe(delay(2000));
  }

. . .
```

* Similarly update leader.service.ts and promotion.service.ts

### Updating the Components

* Update menu.component.ts

```ts
    this.dishService.getDishes().subscribe(dishes => this.dishes = dishes);
```

* Similarly update about.component.ts, dishdetail.component.ts and home.component.ts to subscribe to the observables from the services.

---

# Angular and RxJS Part 2

### Updating the Dish Service

* Update dish.service.ts

```ts
  getDishIds(): Observable<string[] | any> {
    return of(DISHES.map(dish => dish.id ));
  }
```

### Update the Dish Detail Component

* Update the dishdetail.component.ts

```ts
. . .

import { switchMap } from 'rxjs/operators';

. . .

  dishIds: string[];
  prev: string;
  next: string;

  . . .


  ngOnInit() {
    this.dishservice.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
    this.route.params.pipe(switchMap((params: Params) => this.dishservice.getDish(params['id'])))
    .subscribe(dish => { this.dish = dish; this.setPrevNext(dish.id); });
  }

  setPrevNext(dishId: string) {
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }

  . . .
```

### Updating the Dish Detail Template

* Update dishdetail.component.html

```html
. . .

      <mat-card-actions>
        <button mat-button [routerLink]="['/dishdetail', prev]"><span class="fa fa-chevron-left fa-lg"></span></button>
        . . .

        <span class="flex-spacer"></span>
        <button mat-button [routerLink]="['/dishdetail', next]"><span class="fa fa-chevron-right fa-lg"></span></button>
      </mat-card-actions>

      . . .
```

### Demo

![](/assets/L2W3_4ARFpart3Demo.png)

---

## Angular Reactive Forms Part 3

### Add Form Validation

* update contact.component.ts

```ts
. . .

    this.feedbackForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      telnum: ['', [Validators.required, Validators.pattern] ],
      email: ['', [Validators.required, Validators.email] ],
      agree: false,
      contacttype: 'None',
      message: ''
    });

. . .
```

* In contact.component.ts subscribe to Angular Form observable named valueChanges and initiate form validation

```ts
. . .

  formErrors = {
    'firstname': '',
    'lastname': '',
    'telnum': '',
    'email': ''
  };

  validationMessages = {
    'firstname': {
      'required':      'First Name is required.',
      'minlength':     'First Name must be at least 2 characters long.',
      'maxlength':     'FirstName cannot be more than 25 characters long.'
    },
    'lastname': {
      'required':      'Last Name is required.',
      'minlength':     'Last Name must be at least 2 characters long.',
      'maxlength':     'Last Name cannot be more than 25 characters long.'
    },
    'telnum': {
      'required':      'Tel. number is required.',
      'pattern':       'Tel. number must contain only numbers.'
    },
    'email': {
      'required':      'Email is required.',
      'email':         'Email not in valid format.'
    },
  };

. . .

  createForm(): void {

  . . .

    this.feedbackForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now

  }

  . . .


  onValueChanged(data?: any) {
    if (!this.feedbackForm) { return; }
    const form = this.feedbackForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }
```

* update the form in contact.component.html

```html
. . .

        <mat-form-field class="half-width">
          <input matInput formControlName="firstname" placeholder="First Name" type="text" required>
          <mat-error *ngIf="formErrors.firstname">{{formErrors.firstname}}</mat-error>
        </mat-form-field>
        <mat-form-field class="half-width">
          <input matInput formControlName="lastname" placeholder="Last Name" type="text" required>
          <mat-error *ngIf="formErrors.lastname">{{formErrors.lastname}}</mat-error>
        </mat-form-field>
      </p>
      <p>
        <mat-form-field class="half-width">
          <input matInput formControlName="telnum" placeholder="Tel. Number" type="tel" pattern="[0-9]*" required>
          <mat-error *ngIf="formErrors.telnum">{{formErrors.telnum}}</mat-error>
        </mat-form-field>
        <mat-form-field class="half-width">
          <input matInput formControlName="email" placeholder="Email" type="email" email required>
          <mat-error *ngIf="formErrors.email">{{formErrors.email}}</mat-error>
        </mat-form-field>

. . .
```

### DEMO![](/assets/L2W3_ARFPart3Demo.png)



