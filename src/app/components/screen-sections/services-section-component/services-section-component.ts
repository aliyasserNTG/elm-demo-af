import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { Router, RouterModule, Routes } from '@angular/router';
import {ServiceCardComponent} from '@components/reusables/service-card-component/service-card-component';

export interface ServiceCard {
  title: string;
  description: string;
  tags: string[];
}

@Component({
  selector: 'app-services-section-component',
  imports: [CarouselModule, ServiceCardComponent],
  templateUrl: './services-section-component.html',
  styleUrl: './services-section-component.css',
})

export class ServicesSectionComponent {

  /** Number of cards visible at each breakpoint */
  responsiveOptions = [
    { breakpoint: '1200px', numVisible: 4, numScroll: 1 },
    { breakpoint: '900px',  numVisible: 3, numScroll: 1 },
    { breakpoint: '600px',  numVisible: 2, numScroll: 1 },
    { breakpoint: '400px',  numVisible: 1, numScroll: 1 },
  ];

  constructor(private router: Router) {}
// Create an array of numbers [0, 1, 2, ... n-1]
  getIteration(n: number) {
    return Array.from({ length: n }, (_, i) => i);
  }
  navigateToService(): void {
    this.router.navigate(['/service']);
  }
}
