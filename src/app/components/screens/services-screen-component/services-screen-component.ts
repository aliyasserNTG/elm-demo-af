import { Component } from '@angular/core';
import {SidebarComponent} from './../../screen-sections/sidebar-component/sidebar-component';
import {ServicesMainComponent} from './../services-main-component/services-main-component';
import {RelatedServicesComponent} from './../related-services-component/related-services-component';
@Component({
  selector: 'app-services-screen-component',
  imports: [SidebarComponent, ServicesMainComponent, RelatedServicesComponent],
  templateUrl: './services-screen-component.html',
  styleUrl: './services-screen-component.css',
})
export class ServicesScreenComponent {

}
