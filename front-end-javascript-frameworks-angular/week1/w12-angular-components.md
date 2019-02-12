# Angular Components

### Adding a Menu Component

* download the images.zip file

* Move the resulting _images _folder containing some PNG files to the Angular project's _src/assets _folder

* use the CLI's _ng generate _command to generate a new component named menu

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

* 



