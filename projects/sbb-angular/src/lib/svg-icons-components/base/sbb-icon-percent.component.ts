import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-percent',
  // tslint:disable-next-line:max-line-length
  template: '<svg [class]="svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16 8l-9 9 1 1 9-9-1-1zm-6 1c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1m0-1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm4 7c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1m0-1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>',
  styles: []
})
export class IconPercentComponent {
  constructor() { }

  @Input() svgClass = '';
}
