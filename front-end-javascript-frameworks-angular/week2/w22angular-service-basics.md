# Angular Service Basics

## The Model View Controller Framework

* Design Patterns

  * Well-documented solution to a recurring problem

* The Model-View-Controller \(MVC\) Framework

  * Define

    * Isolation of domain logic from user interface

    * Permits independent development, testing and maintenance \(separation of concerns\)

```
![](blob:file:///1f1cf47a-e6f1-4c87-b635-be2d089fc236)
```

* Model

  * manages the behavior and data of the application domain

  * responds to requests for information about its state \(usually from the view\)

  * responds to instructions to change state \(usually from the controller\)

* View

  * renders the model into a form suitable for interaction, typically a user interface element

  * Multiple views can exist for a single model for different purposes

  * A viewport typically has a one to one correspondence with a display surface and knows how to render to it

* Controller

  * receives user input and initiates a response by making calls on model objects

  * A controller accepts input from the user and instructs the model and viewport to perform actions based on that input

* Model View View-Model \(MVVM\)

  ![](blob:file:///bca90ba5-bd5a-465f-92ae-47dcab653a12)

---

## Angular Services

* Services

  * Component classes should be kept lean:

    * Fetching data from server, user input validation and logging should be delegated to a service

    * Mainly act as a mediator between the view and application logic

  * Try to factor out application logic into services and let them do the heavy lifting

    * Dependency Injection

* Component – Service Interaction

![](/assets/L2W2_2Service.png)

---

## Dependency Injection

* What is Dependency Injection \(DI\)?

  * Define

    * Software design pattern that implements inversion of control for resolving dependencies 

  * Dependency

    * An object that can be used \(a service\)

    * Three ways for a component to get hold of its dependencies:

      * Create dependency using new operator

      * Look up dependency using a global variable

      * Have dependency passed to it where needed

    * Third option is most flexible

      * Hard coding of dependency avoided

      * Testing becomes feasible

  * Injection

    * Passing of a dependency to a dependent object so that it can use it. The client does not need to build the object

* DI involves four roles:
  * The sevice
  * The client
  * The interfaces
  * The injector



