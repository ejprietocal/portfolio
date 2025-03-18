import { Directive, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appResizeObserver]'
})
export class ResizeObserverDirective {
  @Output() sizeChanged = new EventEmitter<number>();

  constructor(private el: ElementRef) {}

  @HostListener('window:resize', ['$event'])
  onResize() {
    const width = window.innerWidth;
    this.sizeChanged.emit(width);
  }
}
