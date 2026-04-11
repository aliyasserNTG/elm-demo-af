import { Component } from '@angular/core';
import {
  FormStepperComponent
} from '@components/screens/form-screen-component/form-stepper-component/form-stepper-component';
import {FormComponent} from '@components/screens/form-screen-component/form-component/form-component';

@Component({
  selector: 'app-form-screen-component',
  imports: [
    FormStepperComponent,
    FormComponent
  ],
  templateUrl: './form-screen-component.html',
  styleUrl: './form-screen-component.css',
})
export class FormScreenComponent {

}
