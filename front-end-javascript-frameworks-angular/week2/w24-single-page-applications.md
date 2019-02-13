# Single Page Applications

* Define

  * Web application or web site that fits in a single page

    * No need to reload the entire page

    * UX like a desktop/native application

    * Most resources are retrieved with a single page load

    * Redraw parts of the page when needed without requiring a full server roundtrip

* Traditional Web Sites

![](/assets/L2W2_4TWS.png)

* Single Page Applications

![](/assets/L2W2_4SPA.png)

* Challenges

  * Search engine optimization

  * Partitioning the responsibility between client and server

  * Maintaining history

  * Analytics

  * Speeding up the initial page load

---

# Single Page Applications Part 1

### Integrating the Contact Component

* Update contact.component.html  file

```html
<div class="container"
  fxLayout="column"
  fxLayoutGap="10px">

  <div fxFlex>
    <div>
        <h3>Contact Us</h3>
        <hr>
    </div>
  </div>

  <div fxFlex>
    <h3>Location Information</h3> 
    <div fxLayout="column" fxLayout.gt-sm="row">
      <div fxFlex="50" fxFlexOffset="20px">
        <h4>Our Address</h4>
        <address>
          121, Clear Water Bay Road<br>
          Clear Water Bay, Kowloon<br>
          HONG KONG<br>
          <i class="fa fa-phone"></i>: +852 1234 5678<br>
          <i class="fa fa-fax"></i>: +852 8765 4321<br>
          <i class="fa fa-envelope"></i>: 
                <a href="mailto:confusion@food.net">confusion@food.net</a>
        </address>
        <p></p>
        <div>
          <a mat-raised-button href="tel:+85212345678"><i class="fa fa-phone"></i> Call</a>
          <a mat-raised-button><i class="fa fa-skype"></i> Skype</a>
          <a mat-raised-button href="mailto:confusion@food.net"><i class="fa fa-envelope-o"></i> Email</a>
        </div>
        </div>
      <div fxFlex="40">
        <h4>Map of our Location</h4>
      </div>
    </div>
  </div>
</div>
```

* Update the `routes.ts`file to add in the configuration for the contact component

```ts
  { path: 'contactus',     component: ContactComponent },
```

* Update the`header.component.html`

```html
  <a mat-button routerLink="/contactus"><span class="fa fa-address-card fa-lg"></span> Contact</a>
```

* Demo

![](/assets/L2W2_4ICCDemo.png)

### Updating the Home Component

* update the dish service to return a specific dish

```

```

* add promotion.ts file

```

```

* add promotions.ts file

```

```

* add a new service named "promotion" to the services folder

```

```

* update the promotion.service.ts

```

```

* Import the promotion service into the AppModule and add the service to the providers.

* Update the home.component.html

```

```

* update the home.component.ts file

```

```

### Highlighting the Current Component Link in the Toolbar

* Update each of the links in the toolbar

```

```

* Add scss class to header.component.scss

```

```

Demo

