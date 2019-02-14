# Environment Setup Instructions

## [ ](https://www.coursera.org/learn/machine-learning/supplement/ks2m0/setting-up-your-programming-assignment-environment)Dialogs

### Triggering the Dialog View

* Add a link to the toolbar in the header html

```html
  <span class="flex-spacer"></span>
  <a mat-button (click)="openLoginForm()"><span class="fa fa-sign-in fa-lg"></span> Login</a>
```

### Adding a Dialog Component

* create an Angular component named LoginComponent

```
ng g component login
```

* import MatDialog and MatDialogRef 

```ts
import {MatDialog, MatDialogRef} from '@angular/material';
```

* update the template file login.component.html

```html
<mat-toolbar color="primary">
    Login
  <span class="flex-spacer"></span>
  <button mat-button mat-dialog-close>&times;</button>
</mat-toolbar>
```

* adding the following to the NgModule decorator and import the MatDialogModule;

```ts
. . .

import { MatDialogModule } from '@angular/material/dialog';

. . .

@NgModule({
. . .

  imports: [
    . . .,
    MatDialogModule,
    . . .
  ],
  
  . . .
  
  entryComponents: [
        LoginComponent
  ],
. . .
  
})
```

* trigger the Dialog view of the Login Component , update header.component.ts

```ts
. . .

import { MatDialog, MatDialogRef } from '@angular/material';
import { LoginComponent } from '../login/login.component';

. . .

export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog ) { }

  ngOnInit() {
  }

  openLoginForm() {
    this.dialog.open(LoginComponent, {width: '500px', height: '450px'});
  }

}
```

* 


