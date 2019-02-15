### Client-Server Communication

## Networking Essentials

### Client and Server

* Web applications are not stand-alone
* Many of them have a “Cloud” backend![](/assets/L2W4_1HTTP.png)

### Client-Server Communication

* Network operations cause unexpected delays
* You need to write applications recognizing the asynchronous nature of communication
  * Data is not instantaneously available

### Hypertext Transfer Protocol \(HTTP\)

* A client-server communications protocol
* Allows retrieving inter- linked text documents \(hypertext\) – World Wide Web.
* HTTP Verbs

  * HEAD

  * GET

  * POST

  * PUT

  * DELETE

  * TRACE

  * OPTIONS

  * CONNECT

![](/assets/W4_1HTTPDemo.png)

### HTTP Request Message

![](/assets/L2W4HTTPRequestMessage.png)

### HTTP Response

* Server may send back data in a specific format:

  * eXtensible Markup Language \(XML\)

  * Javascript Object Notation \(JSON\)

### Javascript Object Notation \(JSON\)

* Lightweight data interchange format
* Language independent \*
* Self-describing and easy to understand
* Data Structured as:

  * A collection of name/value pairs

  * Ordered list of values

---

# Setting up a Server using json-server

### Installing json-server

* installed  json-server globally

```
json-server --watch db.json -d 2000
```

### Configuring the Server

* create new folder named json-server

* download db.json file in json-server

* start server

```
json-server --watch db.json -d 2000
```

* addresses following addresses into browser

```
http://localhost:3000/dishes
http://localhost:3000/promotions
http://localhost:3000/leaders
http://localhost:3000/feedback
```



