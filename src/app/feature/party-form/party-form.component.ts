import { Component } from '@angular/core';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';

@Component({
  selector: 'app-party-form',
  imports: [
    MatFormField,
    MatLabel,
    MatInput
  ],
  templateUrl: './party-form.component.html',
  styleUrl: './party-form.component.scss'
})
export class PartyFormComponent {

}
