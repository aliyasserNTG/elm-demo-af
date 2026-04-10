import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {ServiceTabsComponent} from '@components/reusables/service-tabs-component/service-tabs-component';
import {ServicePanelComponent} from '@components/screen-sections/service-panel-component/service-panel-component';
import {
  ServiceRatingComponent
} from '@components/screen-sections/service-rating-component/service-rating-component';
import {ServiceHeaderComponent} from '@components/screen-sections/service-header-component/service-header-component';
import {
  ServiceFeedbackBarComponent
} from '@components/screen-sections/service-feedback-bar-component/service-feedback-bar-component';

@Component({
  selector: 'app-services-main-component',
  imports: [RouterLink, ServiceTabsComponent, ServicePanelComponent, ServiceRatingComponent, ServiceHeaderComponent, ServiceFeedbackBarComponent],
  templateUrl: './services-main-component.html',
  styleUrl: './services-main-component.css',
})
export class ServicesMainComponent {

}
