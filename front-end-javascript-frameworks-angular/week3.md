# 

# Angular Template-driven Forms

## Angular and RxJS

###  The Observer Pattern

* Software-engineering pattern

  * Gang of four

* Observable \(subject\) tracks observers

* Observable notifies observers of state changes

###  Observables

* Streams

* Can be unsubscribed

* Lazy, or cold until some observer does a .subscribe\(\)

* Canceling and retrial straightforward

 Reactive Programming

*  Data flows: how does data flow through your application?

* Propagation of change through your application

* Built around “streams”

* Functional Reactive Programming

  * Functional + Reactive

###  RxJS

*  Library for composing asynchronous and event-based programs by using observable sequences.
* Provides:
  * one core type, the Observable,
  * satellite types \(Observer, Schedulers, Subjects\), and
  * operators inspired by Array\#extras \(map, filter, reduce, every, etc\)
  * to allow handling asynchronous events as collections.
* Used for observables support in Angular

###  Observables, Operators and Marble Diagrams![](/assets/L2W3_4OOMD.png)

###  Angular and RxJS

*  Observables all over Angular

  * Forms 

  * HTTP  

  * AsyncPipe 

  * Change detection

  ![](/assets/L2W3_4AngularRxJs.png)



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



