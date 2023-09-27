import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[onlyAlphabet]'
})
export class OnlyAlphabetDirective {
  
  constructor() {
  }
  @HostListener('input', ['$event']) onKeydown(e:KeyboardEvent) {
    const input = e.target as HTMLInputElement;
    const sanitized = input.value.replace(/[^a-zA-Z]*/g, '');
    input.value = sanitized;
  }
}