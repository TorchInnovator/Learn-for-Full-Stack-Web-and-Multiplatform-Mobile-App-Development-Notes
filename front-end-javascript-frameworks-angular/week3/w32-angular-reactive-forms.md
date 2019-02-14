# 

## Angular Reactive Forms

### Reactive Forms

* Explicit management of data flowing between an **non-UI data mode**l and **a UI-oriented form model**

  * Create a tree of Angular form control objects in the component class

  * Bind them to the native form control elements in the template

  * Component class has immediate access to both data model and the form control structure

    * push data model values to form controls and pull user-changed values back out

* Reactive patterns, testing and validation

* Values and Validity updates are always synchronous

* Easier to unit test

### Reactive Form Classes

* FormControl: powers individual form control, tracks the value and validation status

* FormGroup: group of FormControl instances

* AbstractControl: abstract base class for the form control classses

* FormArray: numerically indexed array of AbstractControl instances

### Populate Form Model

* Form model and Data Model are separate

* User changes flow from the DOM elements to the form model

* Two methods to populate the form model from the data model:

  * setValue\(\): assign every form control value at once

  * patchValue\(\): update specific form control value

###  Angular Reactive Form Validation

*  Validators should be imported from @angular/forms

  ```
  – reduce repetition and clutter
    this.feedbackForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      telnum: ['', Validators.required],
      email: ['', Validators.required],
      agree: [false, Validators.required],
      contacttype: ['None', Validators.required],
      message: ['', Validators.required]
  ```

*  Inspecting Form Control Properties

  * .value : value of the form control .

  * status :  validity: VALID, INVALID, PENDING, DISABLED 

  * .pristine/.dirty :  true if user has not changed/changed value in UI 

  * .untouched/ .touched :  true if the user has not yet entered the HTML control and triggered its blur event

---

## Angular Reactive Forms Part 1

### Importing the Reactive Forms Module

* mporting the ReactiveFormsModule from @angular/forms into AppModule

```ts
. . .
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';

. . .

@NgModule({
. . .

  imports: [
    . . .

    MatSelectModule,
    MatSlideToggleModule,

    . . .,

    ReactiveFormsModule
  ],

  . . .
```

* create a new file named feedback.ts

```ts
export class Feedback {
    firstname: string;
    lastname: string;
    telnum: number;
    email: string;
    agree: boolean;
    contacttype: string;
    message: string;
};

export const ContactType = ['None', 'Tel', 'Email'];
```

### Creating the Reactive Form

* update contact.component.ts

```ts
. . .
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Feedback, ContactType } from '../shared/feedback';

. . .

export class ContactComponent implements OnInit {

  feedbackForm: FormGroup;
  feedback: Feedback;
  contactType = ContactType;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.feedbackForm = this.fb.group({
      firstname: '',
      lastname: '',
      telnum: 0,
      email: '',
      agree: false,
      contacttype: 'None',
      message: ''
    });
  }

  onSubmit() {
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackForm.reset();
  }

}
```

* add the reactive form to contact.component.html

```html
  <div fxFlex fxFlexOffset="20px" class="form-size">
    <h3>Send us your Feedback</h3>
    <p>{{ feedbackForm.value | json }} {{ feedbackForm.status | json }}</p>

    <form novalidate [formGroup]="feedbackForm" (ngSubmit)="onSubmit()">
      <p>
        <mat-form-field class="half-width">
          <input matInput formControlName="firstname" placeholder="First Name" type="text">
        </mat-form-field>
        <mat-form-field class="half-width">
          <input matInput formControlName="lastname" placeholder="Last Name" type="text">
        </mat-form-field>
      </p>
      <p>
        <mat-form-field class="half-width">
          <input matInput formControlName="telnum" placeholder="Tel. Number" type="tel">
        </mat-form-field>
        <mat-form-field class="half-width">
          <input matInput formControlName="email" placeholder="Email" type="email">
        </mat-form-field>
      </p>
      <table class="form-size">
        <td>
          <mat-slide-toggle formControlName="agree">May we contact you?</mat-slide-toggle>
        </td>
        <td>
          <mat-select placeholder="How?" formControlName="contacttype">
            <mat-option *ngFor="let ctype of contactType" [value]="ctype">
              {{ ctype }}
            </mat-option>
          </mat-select>
        </td>
        </table>
      <p>
        <mat-form-field class="full-width">
          <textarea matInput formControlName="message" placeholder="Your Feedback" rows=12></textarea>
        </mat-form-field>
      </p>
      <button type="submit" mat-button class="background-primary text-floral-white">Submit</button>
    </form>
  </div>
```

* Add CSS classes to contact.component.scss

```scss
.full-width {
    width: 95%
}

.half-width {
    width: 45%
}

.form-size {
    width: 75%
}
```

### Demo

* Contact UI

![](/assets/W3_2ARFPart1Demo.png)

* Data

![](/assets/L2W3ARFPart1Demo2.png)

---



