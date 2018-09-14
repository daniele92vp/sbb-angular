import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-lh-christmas-markets-shopping',
  // tslint:disable-next-line:max-line-length
  template: '<svg [class]="svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path stroke-miterlimit="10" d="M27.788 34.3L22.5 27.5h5l-7-9h3l-5.014-6.572" vector-effect="non-scaling-stroke"/><path stroke-miterlimit="10" d="M14.513 11.928L9.499 18.5h3l-7 9h5l-7 9h24.167" vector-effect="non-scaling-stroke"/><path stroke-miterlimit="10" d="M16.5 5.5l1 3h3l-2.5 2 1 3-2.5-2-2.5 2 1-3-2.5-2h3zm0 34.5v-3.5m12-15.008L27.788 34.3l-.288 5.192h16l-1-18z" vector-effect="non-scaling-stroke"/><path stroke-miterlimit="10" d="M37.494 24.992l.006-7.5a2 2 0 0 0-4 0v7.5" vector-effect="non-scaling-stroke"/></svg>',
  styles: []
})
export class IconLhChristmasMarketsShoppingComponent {
  constructor() { }

  @Input() svgClass = '';
}
