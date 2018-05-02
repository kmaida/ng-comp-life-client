import {
  Component,
  OnInit,
  Input,
  AfterContentInit,
  ContentChild,
  ElementRef
} from '@angular/core';
import { HighlightDirective } from '../../../shared/highlight.directive';
import { IDinosaur } from '../../../shared/dinosaur.model';

@Component({
  selector: 'app-dino-content',
  templateUrl: 'dino-content.component.html',
  styles: []
})
export class DinoContentComponent implements OnInit, AfterContentInit {
  @Input() dino: IDinosaur;
  @ContentChild('dinoLink') dinoLink: ElementRef;
  @ContentChild('dinoIcon') dinoIcon: ElementRef;
  @ContentChild(HighlightDirective) dinoHighlight: HighlightDirective;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    if (this.dinoLink) {
      console.log('%cFeatured Link:', 'color: blue; font-weight: bold;');
      console.log(this.dinoLink.nativeElement.href);
    }
    if (this.dinoIcon) {
      console.log(`%cIcon: ${this.dinoIcon.nativeElement.innerText}`, 'color: red; font-weight: bold;');
    }
    if (this.dinoHighlight) {
      console.log('%cHighlight directive:', 'color: green; font-weight: bold');
      console.log(this.dinoHighlight);
    }
  }

}
