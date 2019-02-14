# 

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

### Observables, Operators and Marble Diagrams![](/assets/L2W3_4OOMD.png)

### Angular and RxJS

* Observables all over Angular

  * Forms

  * HTTP

  * AsyncPipe

  * Change detection

  ![](/assets/L2W3_4AngularRxJs.png)

---

## 



