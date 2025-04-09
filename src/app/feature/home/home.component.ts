import {Component, inject} from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader} from '@angular/material/card';
import {CardInput} from './type';
import {CommonModule} from '@angular/common';
import {Router} from '@angular/router';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-home',
  imports: [
    MatCard, CommonModule, MatCardHeader, MatCardContent, MatCardActions, MatButton
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  private readonly router: Router = inject(Router)

  cardItems: CardInput[] = [
    {
      title: 'Party Form',
      description: 'Demonstrates use of Typed Reactive Forms ',
      link: '/party-form'
    },
    {
      title: 'Tailwind css',
      description: 'Demonstrates use of Tailwind CSS',
      link: '/tailwind-css'
    },
    {
      title: 'Content Projection',
      description: 'Demonstrates techniques for content projection',
      link: '/content-projection'
    },

  ];

  navigateTo(link: string) {
    this.router.navigate([link]);

  }
}
