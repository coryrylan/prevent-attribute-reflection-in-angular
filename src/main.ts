import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { FormsModule, FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  template: `
    <h1>Angular Custom Form Controls with Reactive Forms and NgModel</h1>

    <p>
      <a href="https://coryrylan.com/blog/angular-custom-form-controls-with-reactive-forms-and-ngmodel">Tutorial at coryrylan.com</a>
    </p>

    <label for="switch-1">NgModel</label>
    <app-switch id="switch-1" [(ngModel)]="value"></app-switch><br />
    <strong>Value:</strong> {{value}}

    <br /><br />
    <hr />
    <br />

    <form [formGroup]="myForm" (ngSubmit)="submit()">
      <label for="switch-2">Reactive Forms</label>
      <app-switch id="switch-2" formControlName="mySwitch"></app-switch>
      <button>Submit</button>
    </form>
  `,
})
export class App {
  myForm: FormGroup
  value = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      mySwitch: [true]
    });
  }

  submit() {
    alert(`Value: ${this.myForm.controls.mySwitch.value}`);
    console.log(`Value: ${this.myForm.controls.mySwitch.value}`);
  }
}

bootstrapApplication(App);
