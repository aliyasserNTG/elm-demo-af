import { Component } from '@angular/core';
import { HeroSectionComponent } from './../../screen-sections/hero-section-component/hero-section-component';
import { WhoWeAreSectionComponent } from './../../screen-sections/who-we-are-section-component/who-we-are-section-component';
import { ServicesSectionComponent } from './../../screen-sections/services-section-component/services-section-component';
import { NewsSectionComponent } from './../../screen-sections/news-section-component/news-section-component';
import { PartnersSectionComponent } from './../../screen-sections/partners-section-component/partners-section-component';

@Component({
  selector: 'app-home-screen-component',
  imports: [HeroSectionComponent, WhoWeAreSectionComponent, ServicesSectionComponent, NewsSectionComponent, PartnersSectionComponent],
  templateUrl: './home-screen-component.html',
  styleUrl: './home-screen-component.css',
})
export class HomeScreenComponent {

}
