import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-product-rx',
  // tslint:disable-next-line:max-line-length
  template: '<svg [class]="svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59 20"><path d="M9.236 4.2L4.2 15.8h4.249l1.91-4.609L12.047 7.1h8.992l-1.214 2.788H12.36a65.905 65.905 0 0 0 1.563 1.596 240.121 240.121 0 0 0 2.889 2.799A133.2 133.2 0 0 0 18.43 15.8h10.813l1.934-1.484 2.135-1.64 1.394 3.124h6.25l-1.934-3.17-1.73-2.877L45.766 4.2h-6.452l-3.597 2.675L34.414 4.2h-6.092l3.214 5.575-8.475 5.575c-.42-.33-.918-.73-1.495-1.202a100.97 100.97 0 0 0-2.237-1.765h.877c.495 0 .896-.004 1.203-.011.307-.008.528-.019.663-.034.33-.03.555-.082.675-.157.164-.12.344-.398.539-.832L26.321 4.2H9.236z"/></svg>',
  styles: []
})
export class IconProductRxComponent {
  constructor() { }

  @Input() svgClass = '';
}
