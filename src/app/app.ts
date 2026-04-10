import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@components/reusables/header-component/header-component';
import { FooterComponent } from '@components/reusables/footer-component/footer-component';

// import {
//     TranslateService,
//     TranslatePipe,
//     TranslateDirective
// } from "@ngx-translate/core";
// import translationsAR from '../../public/i18n/locale_ar.json';
// import translationsEN from '../../public/i18n/locale_en.json';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  // private translate = inject(TranslateService);

  // constructor(){
  //   this.translate.addLangs(['ar', 'en']);
  //   this.translate.setFallbackLang('en');
  //   this.translate.use('ar');
  // }
}
