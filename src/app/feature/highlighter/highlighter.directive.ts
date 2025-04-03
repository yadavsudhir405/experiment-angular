import {AfterViewInit, Directive, ElementRef, HostListener, inject, Input} from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective implements AfterViewInit {

  element: ElementRef = inject(ElementRef)

  private orginalSize: string = '';

 // Input name matched with the selector name, so while using it we can directly pass the color inline
  @Input('appHighlighter') color!: string;

  @Input() size!:string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.color);
    this.resizeText(this.size);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
    this.resizeText(this.orginalSize);
  }

  ngAfterViewInit(): void {
    this.orginalSize = this.getAppliedTextClass();
  }

  private highlight(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }

  private resizeText(size: string) {
      this.element.nativeElement.classList.remove(this.getAppliedTextClass());
      this.element.nativeElement.classList.add(`text-${size}`);
  }

  private getAppliedTextClass(): string {
    return this.element.nativeElement.getAttribute('class').trim().split(' ').find((item: string) => item.startsWith('text-')) || null;
  }

}
