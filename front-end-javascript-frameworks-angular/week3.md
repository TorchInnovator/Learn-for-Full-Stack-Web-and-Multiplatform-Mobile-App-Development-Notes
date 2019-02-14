# Angular and Promise

## [ ](https://www.coursera.org/learn/angular/supplement/09W61/angular-and-promise-objectives-and-outcomes) Promises

## ![](/assets/L2W3_3Promis.png)

* Promise is a mechanism that supports asynchronous computation

* Proxy for a value not necessarily known when the promise is created:

  * It represents a value that may be available now, or in the future, or never

* Exampe:

![](/assets/L2W3_3PromiseEx.png)

### Why Promises

* Solves the callback hell \(heavily nested callback code\) problem

* Promises can be chained

* Can immediately return:

  * Promise.resolve\(result\)

  * Promise.reject\(error\)

---

# Angular and Promise Part 1

### Reconfigure Services to Return Promises

* update dish.service.ts

```ts
  getDishes(): Promise<Dish[]> {
    return Promise.resolve(DISHES);
  }

  getDish(id: number): Promise<Dish> {
    return Promise.resolve(DISHES.filter((dish) => (dish.id === id))[0]);
  }

  getFeaturedDish(): Promise<Dish> {
    return Promise.resolve(DISHES.filter((dish) => dish.featured)[0]);
  }
```

* Similarly update leader.service.ts and promotion.service.ts to return promises.

### Handling Promises

* update its handling of the call to getDishes\(\) method in menu.component.ts

```ts
    this.dishService.getDishes()
      .then(dishes => this.dishes = dishes);
```

* update about.component.ts, dishdetail.component.ts and home.component.ts where the services are invoked to fetch the data

* Update dishdetail.component.html

```html
. . .

      <h3 *ngIf="dish">{{dish.name | uppercase}}</h3>

. . .
```

---

# Angular and Promise Part 2

### Simulating Time Delay within the Service

* update dish.service.ts

```ts
  getDishes(): Promise<Dish[]> {
    return new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(DISHES), 2000);
    });
  }

  getDish(id: string): Promise<Dish> {
    return new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(DISHES.filter((dish) => (dish.id === id))[0]), 2000);
    });
  }

  getFeaturedDish(): Promise<Dish> {
    return  new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(DISHES.filter((dish) => dish.featured)[0]), 2000);
    });
  }
```

* Update the promotion.service.ts and leader.service.ts files in the same manner  

### Using Angular Material Progress Spinner

* update app.module.ts

```ts
. . .

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

. . .

  imports: [
    . . .,
    MatProgressSpinnerModule,
    . . .
  ]
  
  . . .
```

* update menu.component.html file ,about.component.html, home.component.html and dishdetail.component.html similarly

```ts
  <div fxFlex *ngIf="dishes">
  . . .
  </div>
  <div [hidden]="dishes">
    <mat-spinner></mat-spinner><h4>Loading . . . Please Wait</h4>
  </div>

```



