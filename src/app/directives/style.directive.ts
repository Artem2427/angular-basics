import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({ selector: '[appStyle]' })
export class StyleDirective {
  @Input('appStyle') color: string = 'blue';
  @Input() dStyles: { border?: string };

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // this.renderer.setStyle(this.el.nativeElement, 'color', 'blue');
  }

  @HostListener('click', ['$event']) onClick(event: Event) {
    console.log(event);
  }

  @HostListener('mouseenter') onEnter(event: Event) {
    this.renderer.setStyle(this.el.nativeElement, 'color', this.color);
    // this.renderer.setStyle(
    //   this.el.nativeElement,
    //   'border',
    //   this.dStyles.border
    // );
  }

  @HostListener('mouseleave') onLeave(event: Event) {
    this.renderer.setStyle(this.el.nativeElement, 'color', null);
    // this.renderer.setStyle(this.el.nativeElement, 'border', null);
  }
}
