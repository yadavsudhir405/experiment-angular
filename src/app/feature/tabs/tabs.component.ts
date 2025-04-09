import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  QueryList,
  signal,
  TemplateRef
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
export class TabsComponent implements AfterViewInit{

  selectedTab = signal<TemplateRef<any>| null>(null);

  @ContentChildren(TabItemDirective, {read: TabItemDirective}) tabs!: QueryList<TabItemDirective>;

  selectTab($index: number) {
    this.selectedTab.set(this.tabs.get($index)?.template as TemplateRef<any>);
  }

  ngAfterViewInit(): void {
    this.selectedTab.set(this.tabs.find(item => item.defaultSelected)?.template as TemplateRef<any>);
  }

}
