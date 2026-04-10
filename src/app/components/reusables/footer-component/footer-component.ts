import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
@Component({
  selector: 'app-footer-component',
  imports: [CommonModule, ButtonModule, TooltipModule],
  templateUrl: './footer-component.html',
  styleUrl: './footer-component.css',
})
export class FooterComponent {
currentDate = new Date().toLocaleDateString('ar-SA'); // Placeholder for "Last Modified"
}
