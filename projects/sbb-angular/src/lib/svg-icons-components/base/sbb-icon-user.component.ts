import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-user',
  // tslint:disable-next-line:max-line-length
  template: '<svg [class]="svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.419 11.36c.633-.886 1.015-2.026 1.015-3.293C16.434 5.28 14.408 3 12 3 9.594 3 7.566 5.28 7.566 8.066c0 1.268.38 2.408 1.013 3.293-3.673 1.773-5.446 6.207-5.446 10.007V22h17.734v-.633c0-3.801-1.647-8.359-5.448-10.007zM12 4.268c1.775 0 3.168 1.646 3.168 3.799s-1.393 3.8-3.168 3.8c-1.773 0-3.166-1.647-3.166-3.801S10.227 4.268 12 4.268zM4.4 20.734c.125-3.423 1.773-7.095 5.194-8.487.633.506 1.518.886 2.406.886s1.775-.253 2.408-.886c3.418 1.267 4.938 5.064 5.193 8.487H4.4z"/></svg>',
  styles: []
})
export class IconUserComponent {
  constructor() { }

  @Input() svgClass = '';
}
