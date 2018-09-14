import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-circle',
  // tslint:disable-next-line:max-line-length
  template: '<svg [class]="svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/></svg>',
  styles: []
})
export class IconCircleComponent {
  constructor() { }

  @Input() svgClass = '';
}
