import {
  Component,
  OnInit,
  Input,
  AfterContentInit,
  ContentChild,
  ElementRef
} from '@angular/core';
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
  @ContentChild('dinoHighlight') dinoHighlight: ElementRef;

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
      console.log('%cHighlight:', 'color: green; font-weight: bold');
      console.log(`%c${this.dinoHighlight.nativeElement.innerHTML}`, 'color: green;');
    }
  }

}
