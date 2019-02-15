#  Angular and HTTP

## [ ](https://www.coursera.org/learn/angular/supplement/O0Jty/angular-http-client-objectives-and-outcomes)Angular HTTP Client

* Most modern browsers support two different APIs for making HTTP requests: XMLHttpRequest \(XHR\), or the fetch\(\) API
* Angular supports communication with servers using the HTTP protocol via the browser’s API
  * HttpClientModule
* Operation is asynchronous in nature
* Always delegate data access to a supporting service class
  * Components make use of the services

###  HTTP Response

* The Angular HTTP Client’s get\(\) method parses the server’s JSON response into an anonymous object
* We can tell the HTTP client the “shape” of the object so that the output from the get\(\) can be consumed easily by the application
  * e.g., this.http.get\( . . .\)
* If required you can get access to the whole response

###  Error Handling

*  Error handling done through catch\(\) 
  http.get\(\) .pipe\(catchError\( . . . \)\)
* Process the error in the service and return an error message string to the component through Observable’s throwError\(\) method
* Component that subscribes should then decide how to handle error 
  .subscribe\(data =&gt; . . ., 
  error =&gt; . . . \);

---



