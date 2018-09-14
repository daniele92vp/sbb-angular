import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-service-bl',
  // tslint:disable-next-line:max-line-length
  template: '<svg [class]="svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 13"><path d="M4.1 5.3h1c1.3 0 2.8-.4 2.8-1.9C7.9 2.1 6.7 2 5.7 2h-.9l-.7 3.3zM2.9 11h.9c1.6 0 3.4-.2 3.4-2.2 0-1.4-1.3-1.6-2.7-1.6h-.8L2.9 11zM2.7 0h3.9c2 0 3.9.7 3.9 3.1 0 1.6-1.3 2.8-2.8 3.1 1.5.3 2.1 1.4 2.1 2.8 0 3.7-4.2 4-6.1 4H0L2.7 0zm11.5 0h2.6l-2.3 11h5.1l-.4 2h-7.7"/></svg>',
  styles: []
})
export class IconServiceBlComponent {
  constructor() { }

  @Input() svgClass = '';
}
