import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  inactive = '#eee';

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.padding = '.4rem';
    this.el.nativeElement.style.backgroundColor = this.inactive;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this._highlight('#ffff67');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this._highlight(this.inactive);
  }

  private _highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
