import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  private _inactiveColor = '#eee';

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.padding = '.4rem';
    this.el.nativeElement.style.backgroundColor = this._inactiveColor;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('#ffff67');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(this._inactiveColor);
  }

  highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
