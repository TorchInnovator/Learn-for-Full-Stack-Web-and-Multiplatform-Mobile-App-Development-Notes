# Angular Components Overview

![](/assets/L2W1_2Component.png)![](/assets/L2W1_2ComponentHierarchy.png)

---

## Angular Components Part 1

### Adding a Menu Component

* ### download the images.zip file
* Move the resulting \_images \_folder containing some PNG files to the Angular project's \_src/assets \_folder

* use the CLI's \_ng generate \_command to generate a new component named menu

```
ng generate component menu
CREATE src/app/menu/menu.component.html (23 bytes)
CREATE src/app/menu/menu.component.spec.ts (614 bytes)
CREATE src/app/menu/menu.component.ts (262 bytes)
CREATE src/app/menu/menu.component.scss (0 bytes)
UPDATE src/app/app.module.ts (660 bytes)
```

* Add code in app.component.html

```
<app-menu></app-menu>
```

* Demo![](/assets/L2W1_2ACDemo1.png)

### Creating the Menu

* create folder named shared

* add file named dish.ts in shared folder

```ts
export class Dish {
    id: string;
    name: string;
    image: string;
    category: string;
    featured: boolean;
    label: string;
    price: string;
    description: string;
}
```

* update menu.component.ts follows these data:

```
. . .
import { Dish } from '../shared/dish';
. . .

export class MenuComponent implements OnInit {

  dishes: Dish[] = [
    {
      id: '0',
      name: 'Uthappizza',
      image: '/assets/images/uthappizza.png',
      category: 'mains',
      featured: true,
      label: 'Hot',
      price: '4.99',
      // tslint:disable-next-line:max-line-length
      description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
    },
    {
      id: '1',
      name: 'Zucchipakoda',
      image: '/assets/images/zucchipakoda.png',
      category: 'appetizer',
      featured: false,
      label: '',
      price: '1.99',
      description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'
    },
    {
      id: '2',
      name: 'Vadonut',
      image: '/assets/images/vadonut.png',
      category: 'appetizer',
      featured: false,
      label: 'New',
      price: '1.99',
      description: 'A quintessential ConFusion experience, is it a vada or is it a donut?'
    },
    {
      id: '3',
      name: 'ElaiCheese Cake',
      image: '/assets/images/elaicheesecake.png',
      category: 'dessert',
      featured: false,
      label: '',
      price: '2.99',
      description: 'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'
    }
   ];
. . .
}
```

* update the menu.component.html template

```
<div class="container"
     fxLayout="column"
     fxLayoutGap="10px">

  <mat-list fxFlex>
    <mat-list-item *ngFor="let dish of dishes">
      <img matListAvatar src={{dish.image}} alt={{dish.name}}>
      <h1 matLine> {{dish.name}} </h1>
      <p matLine>
        <span> {{dish.description}} </span>
      </p>
    </mat-list-item>
  </mat-list>

</div>
```

* update app.module.ts

```
. . .

import { MatListModule } from '@angular/material/list';

. . .

  imports: [
    . . .,
    MatListModule,
    . . .
  ],

. . .
```

* Add css in styles.scss

```
.container {
    margin: 20px;
    display:flex;
}
```

* Demo

![](/assets/L2W1_2Demo2.png)

---

## 

## Angular Components Part 2

### Updating the Menu Template

* update menu.component.html

```
<div class="container"
     fxLayout="column"
     fxLayoutGap="10px">

  <div fxFlex>
    <div>
      <h3>Menu</h3>
      <hr>
    </div>
  </div>

  <div fxFlex>
    <mat-grid-list cols="2" rowHeight="200px">
      <mat-grid-tile *ngFor="let dish of dishes">
        <img height="200px" src={{dish.image}} alt={{dish.name}}>
        <mat-grid-tile-footer>
          <h1>{{dish.name | uppercase}}</h1>
        </mat-grid-tile-footer>
      </mat-grid-tile>
    </mat-grid-list>
  </div>

</div>
```

* update app.module.ts

```
. . .

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

. . .

  imports: [
    . . .,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    . . .
  ],

. . .
```

* Demo

![](/assets/L2W1_2MenuTemplateDemo3.png)

* update menu.component.ts file

```
 . . .
 
 const DISHES: Dish[] = [
 . . .
 
 ];
 
 . . .
 
 export class MenuComponent implements OnInit {

  dishes = DISHES;

  selectedDish = DISHES[0];

 . . .
 
 }
```

### Add a Card Component

* update menu.component.html template

```
  <div fxFlex *ngIf="selectedDish">
    <mat-card>
      <mat-card-header>
        <mat-card-title>
          <h3>{{selectedDish.name | uppercase}}</h3>
        </mat-card-title>
      </mat-card-header>
      <img mat-card-image src={{selectedDish.image}} alt={{selectedDish.name}}>
      <mat-card-content>
        <p>{{selectedDish.description}}
        </p>
      </mat-card-content>
      <mat-card-actions>
        <button mat-button>LIKE</button>
        <button mat-button>SHARE</button>
      </mat-card-actions>
    </mat-card>
  </div>
```

* Demo

![](/assets/L2W1_2finalDM.png)



