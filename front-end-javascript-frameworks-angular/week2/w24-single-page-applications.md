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

```ts
. . .

  getDish(id: string): Dish {
    return DISHES.filter((dish) => (dish.id === id))[0];
  }

  getFeaturedDish(): Dish {
    return DISHES.filter((dish) => dish.featured)[0];
  }

. . .
```

Note : arrow function!!

* add `promotion.ts` file

```ts
export class Promotion {
    id: string;
    name: string;
    image: string;
    label: string;
    price: string;
    featured: boolean;
    description: string;
}
```

* add `promotions.ts` file

```ts
import { Promotion } from './promotion';

export const PROMOTIONS: Promotion[] = [
    {
      id: '0',
      name: 'Weekend Grand Buffet',
      image: '/assets/images/buffet.png',
      label: 'New',
      price: '19.99',
      featured: true,
      // tslint:disable-next-line:max-line-length
      description: 'Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person'
    }
  ];
```

* add a new service named "promotion" to the services folder

```
ng generate service services/promotion
CREATE src/app/services/promotion.service.spec.ts (348 bytes)
CREATE src/app/services/promotion.service.ts (138 bytes)
```

* update the promotion.service.ts

```ts
. . .
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';

. . .

  getPromotions(): Promotion[] {
    return PROMOTIONS;
  }

  getPromotion(id: string): Promotion {
    return PROMOTIONS.filter((promo) => (promo.id === id))[0];
  }

  getFeaturedPromotion(): Promotion {
    return PROMOTIONS.filter((promotion) => promotion.featured)[0];
  }

. . .
```

* Import the promotion service into the AppModule and add the service to the providers.

* Update the home.component.html

```html
<div class="container"
     fxLayout="row"
     fxLayout.sm="column"
     fxLayout.xs="column"
     fxLayoutAlign.gt-md="space-around center"
     fxLayoutGap="10px">

<mat-card *ngIf="dish" fxFlex>
  <mat-card-header>
    <div mat-card-avatar></div>
    <mat-card-title>
      <h3>{{dish.name | uppercase}}</h3>
    </mat-card-title>
  </mat-card-header>
  <img mat-card-image src={{dish.image}} alt={{dish.name}}>
  <mat-card-content>
    <p>{{dish.description}}
    </p>
  </mat-card-content>
</mat-card>

<mat-card *ngIf="promotion" fxFlex>
  <mat-card-header>
    <div mat-card-avatar></div>
    <mat-card-title>
      <h3>{{promotion.name | uppercase}}</h3>
    </mat-card-title>
  </mat-card-header>
  <img mat-card-image src={{promotion.image}} alt={{promotion.name}}>
  <mat-card-content>
    <p>{{promotion.description}}
    </p>
  </mat-card-content>
</mat-card>

</div>
```

* update the home.component.ts file

```ts
. . .

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';

. . .

export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;

  constructor(private dishservice: DishService,
    private promotionservice: PromotionService) { }

  ngOnInit() {
    this.dish = this.dishservice.getFeaturedDish();
    this.promotion = this.promotionservice.getFeaturedPromotion();
  }

}
```

* Demo

![](/assets/L2W2_4UTHCDemo.png)

### Highlighting the Current Component Link in the Toolbar

* Update each of the links in the toolbar

```html
  <a mat-button routerLink="/home" routerLinkActive="active"><span class="fa fa-home fa-lg"></span> Home</a>
```

```scss
. . .
$background-moredark: #4527A0;
. . .
.active {
    background: $background-moredark;
}
```

* Demo
  * Home

  ![](/assets/L2W2_4DemoHome.png)
  * Menu

  ![](/assets/L2W2DemoMenu.png)
  * Contact

  ![](/assets/L2W2_4DemoContact.png)



