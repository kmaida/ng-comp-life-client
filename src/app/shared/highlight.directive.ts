import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  private inactiveColor = '#eee';

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.padding = '.4rem';
    this.el.nativeElement.style.backgroundColor = this.inactiveColor;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('#ffff67');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(this.inactiveColor);
  }

  highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
