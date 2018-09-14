import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-sight',
  // tslint:disable-next-line:max-line-length
  template: '<svg [class]="svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.81 22.013l-3.8-.015-.076-.406C13.9 21.432 13.572 20 12 20s-1.901 1.431-1.934 1.594l-.08.403L6.191 22 8 18.382V17h.64l.86-2.581v-1.42h.543l1-10.999h1.914L14 13h.5v1.419l.86 2.58H16v1.384l1.81 3.63zm-3.006-1.011l1.386.006L15 18.617V18H9v.618L7.809 21h1.387c.306-.854 1.14-2 2.804-2 1.665 0 2.499 1.147 2.804 2.002zM9.694 17h4.613l-.807-2.5V14h-3l-.025.658L9.693 17zm1.354-4h1.904l-.909-10h-.086l-.91 10z"/></svg>',
  styles: []
})
export class IconSightComponent {
  constructor() { }

  @Input() svgClass = '';
}
