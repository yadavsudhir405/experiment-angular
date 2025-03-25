import {Component} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {RouterLink} from '@angular/router';

export enum Theme {
  'light',
  'dark',
  'system'
};

export type ThemeDetail = {
  type: Theme;
  label: string;
  icon: string;
  class:string;
}

@Component({
  selector: 'app-header',
  imports: [
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  themes: ThemeDetail[] = [
    {type: Theme.light, label: 'Light', icon: 'light_mode', class:'light'},
    {type: Theme.dark, label: 'Dark', icon: 'dark_mode', class: 'dark'},
    {type: Theme.system, label: 'System', icon: 'desktop_windows', class: 'light dark'}
  ];
  selectedTheme: ThemeDetail = this.themes[2];

  constructor() {}

  setTheme(theme: ThemeDetail) {
    this.selectedTheme = theme;
    document.body.style.colorScheme = theme.class;
  }

  onMenuItemClick(theme: ThemeDetail) {
    this.setTheme(theme);
  }
}
