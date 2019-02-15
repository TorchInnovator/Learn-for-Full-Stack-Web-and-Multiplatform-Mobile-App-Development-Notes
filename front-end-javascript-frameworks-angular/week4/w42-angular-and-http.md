# Angular and HTTP

## [ ](https://www.coursera.org/learn/angular/supplement/O0Jty/angular-http-client-objectives-and-outcomes)Angular HTTP Client

* Most modern browsers support two different APIs for making HTTP requests: XMLHttpRequest \(XHR\), or the fetch\(\) API
* Angular supports communication with servers using the HTTP protocol via the browser’s API
  * HttpClientModule
* Operation is asynchronous in nature
* Always delegate data access to a supporting service class
  * Components make use of the services

### HTTP Response

* The Angular HTTP Client’s get\(\) method parses the server’s JSON response into an anonymous object
* We can tell the HTTP client the “shape” of the object so that the output from the get\(\) can be consumed easily by the application
  * e.g., this.http.get\( . . .\)
* If required you can get access to the whole response

### Error Handling

* Error handling done through catch\(\) 
  http.get\(\) .pipe\(catchError\( . . . \)\)
* Process the error in the service and return an error message string to the component through Observable’s throwError\(\) method
* Component that subscribes should then decide how to handle error 
  .subscribe\(data =&gt; . . ., 
  error =&gt; . . . \);

---

## Brief Representational State Transfer \(REST\)

### Web Services

* A system designed to support interoperability of systems connected over a network 
  * Service oriented architecture \(SOA\) 
  * A standardized way of integrating web-based applications using open standards operating over the Internet 
* Two common approaches used in practice: 
  * SOAP \(Simple Object Access Protocol\) based services
    * Uses WSDL \(Web Services Description Language\)
    * XML based 
  * REST \(Representational State Transfer\) 
    * Use Web standards
    * Exchange of data using either XML or JSON 
    * Simpler compared to SOAP, WSDL etc.

### REST

* A style of software architecture for distributed hypermedia systems such as the World Wide Web.

* Introduced in the doctoral dissertation of Roy Fielding

  * One of the principal authors of the HTTP specification.

* A collection of network architecture principles which outline how resources are defined and addressed

* Four basic design principles:

  * Use HTTP methods explicitly

  * Be stateless

  * Expose directory structure-like URIs

  * Transfer using XML, JavaScript Object Notation \(JSON\), or both

### REST and HTTP

* The motivation for REST was to capture the characteristics of the Web that made the Web successful
  * URI \(Uniform Resource Indicator\) Addressable resources
  * HTTP Protocol
  * Make a Request – Receive Response – Display Response
* Exploits the use of the HTTP protocol beyond HTTP POST and HTTP GET
  * HTTP PUT, HTTP DELETE
  * Preserve Idempotence

### REST Concepts

![](/assets/L2W4_2REST.png)

### Stateless Server

* Server side should not track the client state:
  * Every request is a new request from the client
* Client side should track its own state: 
  * E.g., using cookies, client side database
  * Every request must include sufficient information for server to serve up the requested information
  * Client-side MVC setup

---

## Angular HTTP Client

### Configuring the Base Server URL

* import the HttpClientModule in app.module.ts

```ts
. . .

import { HttpClientModule } from '@angular/common/http';

. . .

@NgModule({

  . . . 
  imports: [ 
    . . . 

    HttpClientModule 
  ], 

  . . .
```

* Create a new file named baseurl.ts in the shared folder

```ts
export const baseURL = 'http://localhost:3000/';
```

* Open AppModule, import baseURL and update the AppModule's providers property of the @NgModule decorator

```ts
. . .
import { baseURL } from './shared/baseurl';

. . .

providers: [
  . . .
  {provide: 'BaseURL', useValue: baseURL}
  ]
```

### Updating the Dish Service

* update dish.service.ts

```ts
. . .

import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';

. . .

  constructor(private http: HttpClient) { }

  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(baseURL + 'dishes');
  }

  getDish(id: number): Observable<Dish> {
    return this.http.get<Dish>(baseURL + 'dishes/' + id);
  }

  getFeaturedDish(): Observable<Dish> {
    return this.http.get<Dish[]>(baseURL + 'dishes?featured=true').pipe(map(dishes => dishes[0]));
  }

  getDishIds(): Observable<number[] | any> {
    return this.getDishes().pipe(map(dishes => dishes.map(dish => dish.id)));
  }

  . . .
```

### Updating Menu Component

* update menu.component.ts

```ts
import { Component, OnInit, Inject } from '@angular/core';

. . .

  constructor(private dishService: DishService,
    @Inject('baseURL') private baseURL) { }

. . .
```

* delete the DISHES import and the selectedDish variable and the onSelectDish\(\) method

* update  menu.component.html , Similarly update dishdetail.component.html, dishdetail.component.ts, home.component.html and home.component.ts

```html
. . .
        <img height="200px" src="{{ baseURL+ dish.image }}" alt={{dish.name}}>

. . .
```

### Demo

```
json-server --watch db.json -d 2000
 \{^_^}/ hi!

  Loading db.json
  Done

  Resources
  http://localhost:3000/dishes
  http://localhost:3000/promotions
  http://localhost:3000/leadership
  http://localhost:3000/feedback

  Home
  http://localhost:3000

  Type s + enter at any time to create a snapshot of the database
  Watching...

GET /dishes 304 2003.493 ms - -
GET /dishes 304 2005.414 ms - -
GET /dishes/0 304 2007.389 ms - -
GET /dishes 304 2004.466 ms - -
GET /dishes/0 304 2005.456 ms - -
GET /dishes?featured=true 304 2003.632 ms - -
GET /dishes?featured=true 304 2003.753 ms - -
```

---

# Angular HTTP Client: Error Handling

### Add ProcessHTTPMsgService to Handle Errors

* Create a new service named ProcessHTTPMsg in the services folder

* Import the service into AppModule and include it in the providers property of the @NgModule decorator.

* Update process-httpmsg.service.ts to include a function to handle errors

```ts
. . .

import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

. . .


  public handleError(error: HttpErrorResponse | any) {
    let errMsg: string;

    if (error.error instanceof ErrorEvent) {
      errMsg = error.error.message;
    } else {
      errMsg = `${error.status} - ${error.statusText || ''} ${error.error}`;
    }

    return throwError(errMsg);
  }
  . . .
```



### Update Dish Service

* Update dish.service.ts to catch and handle errors

```ts
. . .

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

. . .

import { ProcessHTTPMsgService } from './process-httpmsg.service';

. . .

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(baseURL + 'dishes')
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getDish(id: number): Observable<Dish> {
    return this.http.get<Dish>(baseURL + 'dishes/' + id)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getFeaturedDish(): Observable<Dish> {
    return this.http.get<Dish[]>(baseURL + 'dishes?featured=true').pipe(map(dishes => dishes[0]))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getDishIds(): Observable<number[] | any> {
    return this.getDishes().pipe(map(dishes => dishes.map(dish => dish.id)))
      .pipe(catchError(error => error));
  }
  . . .
```

### Update Menu Component

* Update menu.component.ts

```ts
. . .
  errMess: string;
. . .

    this.dishService.getDishes()
    .subscribe(dishes => this.dishes = dishes,
      errmess => this.errMess = <any>errmess);
. . .
```

* Update menu.component.html, Similarly update dishdetail.component.ts and dishdetail.component.html file

```ts
. . .
  <div [hidden]="dishes || errMess">
    . . .
    
  </div>
  <div fxFlex *ngIf="errMess">
    <h2>Error</h2>
    <h4>{{errMess}}</h4>
  </div>
  
  . . .
```

* Also update home.component.ts and home.component.html files similarly, but use the variable named dishErrMess instead of errMess.



