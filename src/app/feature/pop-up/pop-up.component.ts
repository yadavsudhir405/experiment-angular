import {Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-pop-up',
  imports: [
    CommonModule,
    MatIcon,
  ],
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.scss',
})
export class PopUpComponent implements OnChanges {

  @Input() showPopup: boolean = false;
  @Input() title: string = '';
  @Output('onClose') closePopup = new EventEmitter<boolean>();

  @ViewChild('dialog', { static: true }) dialog!: ElementRef;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['showPopup']) {
      if (changes['showPopup'].currentValue) {
        this.showModal();
      } else {
        this.closeModal();
      }
    }
  }

  private showModal(): void {
    this.dialog?.nativeElement.showModal();
  }

  private closeModal(): void {
    this.dialog?.nativeElement.close();
  }

  closeDialog() {
    this.closeModal();
    this.closePopup.emit(true);
  }
}
