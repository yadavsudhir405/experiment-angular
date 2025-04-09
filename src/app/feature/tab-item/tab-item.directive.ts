import {Directive, Input, TemplateRef} from '@angular/core';

@Directive({
  selector: '[appTabItem]'
})
export class TabItemDirective {

  @Input('appTabItem') name!: string;

  @Input('appTabItemDefaultSelected') defaultSelected: boolean = false;

  constructor(public template: TemplateRef<any>) { }

}
