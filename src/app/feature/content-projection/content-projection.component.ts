import { Component } from '@angular/core';
import {PopUpComponent} from '../pop-up/pop-up.component';
import {MatButton} from '@angular/material/button';
import {MatDivider} from '@angular/material/divider';
import {TabsComponent} from '../tabs/tabs.component';
import {TabItemDirective} from '../tab-item/tab-item.directive';

@Component({
  selector: 'app-content-projection',
  imports: [
    PopUpComponent,
    MatButton,
    MatDivider,
    TabsComponent,
    TabItemDirective
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
