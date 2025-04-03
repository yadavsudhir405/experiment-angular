import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonToggle, MatButtonToggleChange, MatButtonToggleGroup} from '@angular/material/button-toggle';
import {TitleCasePipe} from '@angular/common';
import {HighlighterDirective} from '../highlighter/highlighter.directive';


@Component({
  selector: 'app-tailwind',
  imports: [
    MatDividerModule,
    MatButtonToggleGroup,
    MatButtonToggle,
    TitleCasePipe,
    HighlighterDirective
  ],
  templateUrl: './tailwind.component.html',
  styleUrl: './tailwind.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TailwindComponent {

  highlightColors = ['red', 'yellow', 'green']
  textSizes = ['lg', 'xl', '2xl'];

  selectedHighLighterColor = signal(this.highlightColors[0]);
  selectedTextSize = signal(this.textSizes[0]);


  setHighLighterColor($event: MatButtonToggleChange) {
    const value: string = $event.value;
    this.selectedHighLighterColor.set(value);
  }

  setTextSize($event: MatButtonToggleChange) {
    const value: string = $event.value;
    this.selectedTextSize.set(value);
  }
}
