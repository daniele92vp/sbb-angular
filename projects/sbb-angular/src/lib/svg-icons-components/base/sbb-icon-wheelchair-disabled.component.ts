import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-wheelchair-disabled',
  // tslint:disable-next-line:max-line-length
  template: '<svg [class]="svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.636 5.643c0-.546-.363-.909-.908-.909-.546 0-.908.363-.908.909 0 .545.362.908.908.908.544 0 .908-.363.908-.908m4.541 9.445v-3.087H14.09m-1.454-4.542h-1.817V8.73l1.817 1.817m5.45 7.994L6.55 7.005l-.636.636 2.726 2.725a3.833 3.833 0 0 0-1.454 2.998 4.071 4.071 0 0 0 4.088 4.088 4.05 4.05 0 0 0 2.997-1.362l3.179 3.178.636-.727zm-6.813-1.999c-1.727 0-3.18-1.454-3.18-3.179 0-1 .454-1.817 1.091-2.362l1.635 1.635v1.182h1.271l1.635 1.635c-.635.636-1.453 1.089-2.452 1.089z"/></svg>',
  styles: []
})
export class IconWheelchairDisabledComponent {
  constructor() { }

  @Input() svgClass = '';
}
