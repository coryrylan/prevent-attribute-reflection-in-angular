import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
