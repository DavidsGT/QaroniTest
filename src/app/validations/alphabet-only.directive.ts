import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[onlyAlphabet]'
})

export class AlphabetOnlyDirective {
  key:any;
  @HostListener('keydown', ['$event']) onKeydown(event: KeyboardEvent) {
    this.key = event.keyCode;
    if ((this.key >= 15 && this.key < 32) || (this.key > 32 && this.key <= 36) || (this.key >= 41 && this.key <= 64) || (this.key >= 96 && this.key <= 105) || (this.key >= 123 && this.key < 192) || (this.key > 192)) {
      event.preventDefault();
    }
  }
}