import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-dart',
  // tslint:disable-next-line:max-line-length
  template: '<svg [class]="svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.89 9.232A6.95 6.95 0 0 1 18 13c0 3.86-3.14 7-7 7s-7-3.14-7-7 3.14-7 7-7a6.95 6.95 0 0 1 3.768 1.11l.725-.724A7.953 7.953 0 0 0 11 5c-4.411 0-8 3.59-8 8s3.589 8 8 8 8-3.59 8-8a7.953 7.953 0 0 0-1.386-4.493l-.724.725z"/><path d="M20 4V1.793l-3 3v1.5l-4.99 4.99A1.978 1.978 0 0 0 11 11c-1.103 0-2 .897-2 2 0 1.102.897 2 2 2s2-.898 2-2c0-.37-.108-.712-.283-1.01L17.707 7h1.5l3-3H20zm-9 10a1 1 0 1 1 .001-2.001 1 1 0 0 1-.001 2zm7.793-8H18v-.793l1-1V5h.793l-1 1z"/><path d="M11 9a3.98 3.98 0 0 1 1.561.318l.734-.734A4.935 4.935 0 0 0 11 8c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5c0-.831-.223-1.604-.584-2.295l-.734.734c.204.48.318 1.008.318 1.561 0 2.206-1.794 4-4 4s-4-1.794-4-4 1.794-4 4-4z"/></svg>',
  styles: []
})
export class IconDartComponent {
  constructor() { }

  @Input() svgClass = '';
}
