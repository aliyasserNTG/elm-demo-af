import { Component, OnInit } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenuItem } from 'primeng/api';
import {RouterLink} from '@angular/router';
@Component({
  selector: 'app-header-component',
  imports: [CommonModule, MenubarModule, ButtonModule, InputTextModule, RouterLink, NgOptimizedImage],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css',
})
export class HeaderComponent implements OnInit{

items: MenuItem[] | undefined;
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
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
