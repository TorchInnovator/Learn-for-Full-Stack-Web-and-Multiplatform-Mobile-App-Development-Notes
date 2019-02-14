# 

# Angular Template-driven Forms

### Angular and RxJS Part 1[ ](https://www.coursera.org/learn/angular/supplement/VsHr0/angular-template-driven-forms-objectives-and-outcomes)

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



