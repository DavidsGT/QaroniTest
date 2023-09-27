import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
@Directive({ selector: '[preventCutCopyPaste]' })
export class CopyDirective {
  constructor(el: ElementRef, renderer: Renderer2) {
    var events = 'cut copy paste';
    events.split(' ').forEach(e => 
    renderer.listen(el.nativeElement, e, (event:any) => {
      event.preventDefault();
      })
    );
  }
}