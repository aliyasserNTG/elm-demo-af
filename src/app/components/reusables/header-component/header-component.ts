import { Component, OnInit, inject, PLATFORM_ID } from '@angular/core';
import {CommonModule, NgOptimizedImage, isPlatformBrowser} from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenuItem } from 'primeng/api';
import {RouterLink} from '@angular/router';
import { currentLanguage, setLanguage, updateDirection, initLanguage, type Language } from '../../../services/language.service';
@Component({
  selector: 'app-header-component',
  imports: [CommonModule, MenubarModule, ButtonModule, InputTextModule, RouterLink, NgOptimizedImage],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css',
})
export class HeaderComponent implements OnInit{
  private platformId = inject(PLATFORM_ID);
  currentLang = currentLanguage;
  items: MenuItem[] | undefined;

  toggleLanguage() {
    const newLang: Language = this.currentLang() === 'ar' ? 'en' : 'ar';
    setLanguage(newLang, this.platformId);
  }

  ngOnInit() {
    // Initialize language direction on first load
    if (isPlatformBrowser(this.platformId)) {
      initLanguage();
    }

    this.items = [
      { label: 'تبويب 1' },
      { label: 'تبويب 2' },
      { label: 'تبويب 3' },
      { label: 'تبويب 4' },
      { label: 'تبويب 5' },
      { label: 'تبويب 6' },
      { label: 'تبويب 7' }
    ];
  }
}
