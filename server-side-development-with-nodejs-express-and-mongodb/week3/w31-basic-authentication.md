### Basic Authentication

### HTTP Basic Access Authentication

* Method for HTTP user agent to provide username and password with a request
* Server can challenge a client to authenticate itself
* Client needs to send the username and password in response

### Basic Access Authentication

![](/assets/BackendW3BAA.png)

### Authorization Header

* The Authorization header is constructed as follows: 
  * Username and password are combined into a string "username:password".
  * The resulting string literal is then encoded using Base64.
  * The authorization method and a space, i.e. "Basic " is then put before the encoded string. 
    * Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==

###  Express and Authentication

![](/assets/BackendW3_1EA.png)







