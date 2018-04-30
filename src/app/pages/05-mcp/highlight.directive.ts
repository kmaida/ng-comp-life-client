import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this._highlight('#ffff67');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this._highlight(null);
  }

  private _highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.padding = '.4rem';
  }
}
