import {Component, OnInit} from '@angular/core';
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
  primaryColor: string;
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
export class HeaderComponent implements OnInit {
  themes: ThemeDetail[] = [
    {type: Theme.light, label: 'Orange', icon: 'light_mode', primaryColor: '#9a4600', class:'orange-theme'},
    {type: Theme.dark, label: 'Green', icon: 'dark_mode', primaryColor: '#006b5e', class: 'green-theme'},
    {type: Theme.system, label: 'Deep Brown', icon: 'desktop_windows', primaryColor: '#ffaed8', class: 'deep-brown-theme'}
  ];
  selectedTheme!: ThemeDetail;

  constructor() {}

  ngOnInit(): void {
    this.setTheme(this.themes[0]);
  }

  setTheme(theme: ThemeDetail) {
    const previousTheme = this.selectedTheme;
    this.selectedTheme = theme;
    document.body.classList.remove(previousTheme?.class);
    document.body.classList.add(theme.class);
  }

  onMenuItemClick(theme: ThemeDetail) {
    this.setTheme(theme);
  }
}
