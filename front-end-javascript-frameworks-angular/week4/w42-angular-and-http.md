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

##  Brief Representational State Transfer \(REST\)

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

*  Four basic design principles:

  * Use HTTP methods explicitly

  * Be stateless

  * Expose directory structure-like URIs

  * Transfer using XML, JavaScript Object Notation \(JSON\), or both



###  REST and HTTP

*  The motivation for REST was to capture the characteristics of the Web that made the Web successful
  * URI \(Uniform Resource Indicator\) Addressable resources
  * HTTP Protocol
  * Make a Request – Receive Response – Display Response
* Exploits the use of the HTTP protocol beyond HTTP POST and HTTP GET
  * HTTP PUT, HTTP DELETE
  * Preserve Idempotence

###  REST Concepts

![](/assets/L2W4_2REST.png)



###  Stateless Server

* Server side should not track the client state:
  * Every request is a new request from the client
* Client side should track its own state: 
  * E.g., using cookies, client side database
  * Every request must include sufficient information for server to serve up the requested information
  * Client-side MVC setup



