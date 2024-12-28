import {Component, inject} from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader} from '@angular/material/card';
import {CardInput} from './type';
import {CommonModule} from '@angular/common';
import {MatIcon} from '@angular/material/icon';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    MatCard, CommonModule, MatCardHeader, MatCardContent, MatCardActions, MatIcon
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
    }
  ];

  navigateTo(link: string) {
    this.router.navigate([link]);

  }
}
