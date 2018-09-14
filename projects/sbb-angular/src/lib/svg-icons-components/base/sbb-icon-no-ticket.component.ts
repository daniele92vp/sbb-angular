import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-no-ticket',
  // tslint:disable-next-line:max-line-length
  template: '<svg [class]="svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 16H6v-1h6v1zm6.01-2v-1H16v1h2.01zM12 13H6v1h6v-1zm6.01-2H15v1h3.01v-1zm.093-6.005h-.638a.897.897 0 0 1-.303.574 1.021 1.021 0 0 1-.343.168 2.187 2.187 0 0 1-.487.063v.579h.958V9h.813V4.995zM13 6.001v5h1V4.998l-3 .005V4h8v12h1V3H10v2.006l-2 .003v1zm8.354 14.645l-.707.707L18.293 19H14v2H4V5h.293L2.646 3.354l.707-.707zM13 13.707L5.293 6H5v14h8v-6.293zM17.293 18L14 14.707V18h3.293z"/></svg>',
  styles: []
})
export class IconNoTicketComponent {
  constructor() { }

  @Input() svgClass = '';
}
