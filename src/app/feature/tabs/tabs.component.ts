import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren, Input,
  QueryList,
  TemplateRef,
  ViewEncapsulation
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButton} from '@angular/material/button';
import {TabItemDirective} from '../tab-item/tab-item.directive';

@Component({
  selector: 'app-tabs',
  imports: [
    CommonModule,
    MatButton
  ],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent {
  @Input() selectedTab!: TemplateRef<any>;

  @ContentChildren(TabItemDirective, {read: TabItemDirective}) tabs!: TabItemDirective[];

  @ContentChildren(TabItemDirective, {read: TemplateRef<any>}) tabList!: QueryList<TemplateRef<any>>;

  selectTab($index: number) {
    this.selectedTab = this.tabList.get($index) as TemplateRef<any>;
  }

}
