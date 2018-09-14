import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-pencil',
  // tslint:disable-next-line:max-line-length
  template: '<svg [class]="svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.001 9.997L14.003 7l2.996-2.996 2.998 2.985-2.996 3.008zM15.417 7l1.582 1.582 1.584-1.59-1.582-1.575L15.417 7zm-7.42 12H5v-2.997l8-8L15.997 11l-8 8zM6 18h1.583l7-7.001L13 9.417l-7 7V18z"/></svg>',
  styles: []
})
export class IconPencilComponent {
  constructor() { }

  @Input() svgClass = '';
}
