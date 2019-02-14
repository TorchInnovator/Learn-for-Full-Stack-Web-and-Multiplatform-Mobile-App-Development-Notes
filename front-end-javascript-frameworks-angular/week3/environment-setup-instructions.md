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

---

## Angular Template-driven Forms

* Forms

  * Cohesive, effective and compelling data entry experience 
  * Extensively used in websites and web applications for

    * log in

    * submit information \(placing orders, booking a ticket etc.\)

* Angular Forms

  * Two-way data binding

  * Change tracking

  * Form validation and error handling

* Angular Template-driven Forms

  * Use Angular template syntax to construct a form using the form elements

  * Bind Angular form-specific directives with form elements

* Forms and Two-way Data Binding

  * Define a JavaScript object in your class

  * Use ngModel directive on form fields

    * Banana in a box \[\(\)\]

### Angular Template-driven Form Validation

* Angular Form Validation

  * Turn off HTML5 form validation:

    * &lt;form novalidate&gt;

* Angular Template Reference Variables

  * set to ngForm and ngModel gives reference to the Angular directive

    * check for control states

  * Control states

    * pristine : true if field/form has not been changed

    * .dirty :  reverse of .pristine

    * valid :  true if form field/whole form is valid

    * .invalid :  reverse of .valid

---

## Angular Template-driven Forms Part 1

### Add in the Login Template-driven Form

* import the Angular Forms module\(Template-driven forms\) into app.module.ts

```ts
. . .

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms'; 

. . . 

@NgModule({ 

. . . 

  imports: [ 
    . . .

    MatFormFieldModule, 
    MatInputModule,
    MatCheckboxModule,

    . . .

    FormsModule 
  ],

. . .
```

* Add form in login.component.html file

```html
<p>{{ user | json }}</p>

<form novalidate (ngSubmit)="onSubmit()">

  <mat-dialog-content>
    <p>
      <mat-form-field>
        <input matInput placeholder="Username" type="text" [(ngModel)]="user.username" name="username">
      </mat-form-field>
      <mat-form-field>
        <input matInput placeholder="Password" type="password" [(ngModel)]="user.password" name="password">
      </mat-form-field>
      <mat-checkbox [(ngModel)]="user.remember" name="remember">Remember Me</mat-checkbox>
    </p>
  </mat-dialog-content>
  <mat-dialog-actions>
    <span class="flex-spacer"></span>
    <button mat-button mat-dialog-close>Cancel</button>
    <button type="submit" mat-button class="background-primary text-floral-white" >Login</button>
  </mat-dialog-actions>
</form>
```

* use the Angular Material support for styling the form elements using the Form element components

* update login.component.ts file

```ts
. . .

export class LoginComponent implements OnInit {

  user = {username: '', password: '', remember: false};

  constructor(public dialogRef: MatDialogRef<LoginComponent>) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('User: ', this.user);
    this.dialogRef.close();
  }

}
```

### Demo

* UI

![](/assets/L2W3_1Demo1.png)

* save Information![](/assets/L2W3_1Demo2.png)

---

# Angular Template-driven Forms Part 2

### Adding Template Reference Variables

* add in the template reference variables to the two &lt;input&gt; elements and the &lt;form&gt; element in login.component.html file

```html
. . .
<form novalidate #loginForm="ngForm" (ngSubmit)="onSubmit()">

. . .

        <input matInput placeholder="Username" type="text" [(ngModel)]="user.username" name="username" #username="ngModel" required>

. . .

        <input matInput placeholder="Password" type="password" [(ngModel)]="user.password" name="password" #password="ngModel" required>

. . .
```

### Doing Form Validation

* disable the submit button if the form is invalid

```html
. . .
    <button type="submit" mat-button class="background-primary text-floral-white" [disabled]="loginForm.form.invalid" >Login</button>
. . .
```

* add error messages below the input elements

```
      . . .

      <mat-form-field>
        <input matInput placeholder="Username" type="text" [(ngModel)]="user.username" name="username"  #username="ngModel" required>
        <mat-error *ngIf="username.errors?.required">Username is required</mat-error>
      </mat-form-field>
      <mat-form-field>
        <input matInput placeholder="Password" type="password" [(ngModel)]="user.password" name="password" #password="ngModel" required>
        <mat-error *ngIf="password.errors?.required">Password is required</mat-error>
      </mat-form-field>

      . . .

      <button type="submit" mat-button class="background-primary text-floral-white" [disabled]="loginForm.form.invalid">Login</button>

      . . .
```

### Demo

![](/assets/L2W3_1Part2Demo.png)



