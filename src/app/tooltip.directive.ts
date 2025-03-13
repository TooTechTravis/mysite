import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';

declare var bootstrap: any;

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective implements AfterViewInit {
  @Input('appTooltip') tooltipText: string = '';

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    if (this.tooltipText) {
      const tooltipInstance = new bootstrap.Tooltip(this.el.nativeElement, {
        title: this.tooltipText,
        placement: 'bottom',
        trigger: 'manual',
        delay: { show: 0, hide: 0 }
      });

      tooltipInstance.show();

      setTimeout(() => tooltipInstance.hide(), 3000);
    }
  }
}
