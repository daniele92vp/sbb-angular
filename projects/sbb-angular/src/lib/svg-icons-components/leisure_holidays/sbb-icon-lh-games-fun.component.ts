import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-lh-games-fun',
  // tslint:disable-next-line:max-line-length
  template: '<svg [class]="svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path stroke-miterlimit="10" d="M17.5 33.5v8.523M17 12.5c-2.968.27-5.701 2.946-6.5 6.5" vector-effect="non-scaling-stroke"/><path stroke-miterlimit="10" d="M19.5 18.5c0-2.966.902-5.676 2.388-7.77-1.326-.78-2.812-1.23-4.388-1.23-5.523 0-10 5.373-10 12 0 6.628 4.477 12 10 12 3.05 0 5.778-1.645 7.613-4.23-3.32-1.952-5.612-6.034-5.612-10.77z" vector-effect="non-scaling-stroke"/><path stroke-miterlimit="10" d="M25.113 29.27c1.326.78 2.811 1.23 4.388 1.23 5.522 0 10-5.373 10-12 0-6.628-4.478-12-10-12-3.051 0-5.779 1.645-7.613 4.23M29.5 30.5v11.523M29 9.5c-2.968.27-5.702 2.945-6.5 6.5" vector-effect="non-scaling-stroke"/></svg>',
  styles: []
})
export class IconLhGamesFunComponent {
  constructor() { }

  @Input() svgClass = '';
}
