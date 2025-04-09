import {Directive, Input} from '@angular/core';

@Directive({
  selector: '[appTabItem]'
})
export class TabItemDirective {

  @Input('name') name!: string;

  constructor() { }

}
