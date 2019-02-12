# Angular Components

### Adding a Menu Component

* download the images.zip file

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



