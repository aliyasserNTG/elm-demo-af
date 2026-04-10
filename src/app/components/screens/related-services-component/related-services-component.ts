import { Component } from '@angular/core';
import {ServiceCardComponent} from '@components/reusables/service-card-component/service-card-component';

@Component({
  selector: 'app-related-services-component',
  imports: [
    ServiceCardComponent
  ],
  templateUrl: './related-services-component.html',
  styleUrl: './related-services-component.css',
})
export class RelatedServicesComponent {

}
