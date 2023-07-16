import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appResizable]',
})
export class ResizableDirective {
  private startX: number;
  private startWidth: number;
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}


  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    event.preventDefault();
    this.startX = event.clientX;
    this.startWidth = this.elementRef.nativeElement.offsetWidth;
    this.renderer.addClass(document.body, 'resizing');
    this.renderer.listen('document', 'mousemove', this.onMouseMove.bind(this));
    this.renderer.listen('document', 'mouseup', this.onMouseUp.bind(this));
  }
  onMouseMove(event: MouseEvent) {
    const diffX = event.clientX - this.startX;
    const newWidth = this.startWidth + diffX;
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'width',
      `${newWidth}px`
    );
  }

  onMouseUp() {
    this.renderer.removeClass(document.body, 'resizing');
  //   this.renderer.removeEventListener('document', 'mousemove', this.onMouseMove);
  // this.renderer.removeEventListener('document', 'mouseup', this.onMouseUp);
  }
}
