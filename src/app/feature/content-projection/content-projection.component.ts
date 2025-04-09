import { Component } from '@angular/core';
import {PopUpComponent} from '../pop-up/pop-up.component';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-content-projection',
  imports: [
    PopUpComponent,
    MatButton
  ],
  templateUrl: './content-projection.component.html',
  styleUrl: './content-projection.component.scss'
})
export class ContentProjectionComponent {
  showPopup: boolean = false;

  openPopup() {
    this.showPopup = true;
  }

  hidePopup($event: boolean) {
    this.showPopup = false;
  }
}
