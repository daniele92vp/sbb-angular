import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-product-cnl',
  // tslint:disable-next-line:max-line-length
  template: '<svg [class]="svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59 20"><path d="M14.46 11.16c.06-.1.14-.15.23-.15.1 0 .15.09.15.28v.04l-.9 4.55c-.05.14-.13.21-.24.21-.13 0-.19-.06-.19-.19l-.02-.19c-.04-.34-.2-.51-.49-.51h-.11l-.09.02-.11.04-.45.19c-.86.38-1.81.56-2.84.56-1.55 0-2.81-.46-3.76-1.39-.95-.93-1.43-2.15-1.43-3.67 0-1.88.68-3.5 2.05-4.87s2.99-2.05 4.87-2.05c.94 0 1.85.21 2.74.64l.73.34c.15.05.26.08.34.08.25 0 .46-.16.64-.49l.19-.38.08-.08.13-.04c.09 0 .14.05.17.15l.02.04v.08L15.1 8.88l-.04.24-.09.15c-.03.03-.08.05-.17.08l-.09-.04-.06-.08V8.58c0-1.14-.31-2.11-.94-2.91-.63-.8-1.4-1.2-2.31-1.2-1.24 0-2.32.73-3.23 2.2-.91 1.47-1.37 3.19-1.37 5.17 0 2.51.88 3.76 2.63 3.76 1.24 0 2.21-.39 2.89-1.18.69-.79 1.23-1.52 1.64-2.18l.17-.34.24-.55.04-.06.02-.06.03-.07zm3.61 1.29c-.11.53-.17.96-.17 1.32 0 .43.1.79.31 1.1.21.31.46.46.76.46l.21.02h.06c.13.04.19.11.19.21-.04.1-.07.16-.09.19l-.14.05h-4.08c-.13 0-.19-.06-.19-.19l.02-.09c.03-.03.06-.05.09-.08.04-.03.09-.04.17-.06l.17-.04c.58-.13 1.05-.42 1.41-.87.36-.46.63-1.11.81-1.96l1.41-6.84-.23-.34c-.26-.4-.62-.63-1.07-.68h-.08c-.23 0-.34-.08-.34-.23s.14-.23.41-.23h3.31l4.42 8.03 1.09-5.08.06-.28c.03-.11.04-.24.06-.39s.02-.29.02-.41c0-.78-.34-1.24-1.03-1.39l-.23-.04-.11-.06-.06-.15c0-.15.07-.23.21-.23h3.93c.09 0 .14.03.17.09l.02.09c0 .14-.07.22-.21.24l-.17.04c-.33 0-.66.14-1 .41-.34.28-.6.61-.77 1l-.15.36-.13.39L25.08 16l-.02.02v.04c-.08.08-.14.11-.21.11-.08 0-.13-.03-.17-.08s-.14-.23-.3-.53l-5-9.29-1.31 6.18zm9.91 3.35c-.18 0-.26-.06-.26-.19 0-.15.08-.24.24-.26l.36-.06c.66-.09 1.09-.54 1.28-1.35l1.56-7.43c.05-.31.08-.55.1-.7.02-.16.03-.26.03-.31 0-.43-.24-.7-.71-.81h-.06c-.24-.05-.36-.14-.36-.26 0-.15.14-.23.43-.23h4.85c.1 0 .15.06.15.19v.04c0 .15-.11.23-.34.23l-.23.02h-.18c-.51 0-.85.37-1 1.11l-1.62 7.56c-.04.16-.08.39-.11.67-.04.28-.06.47-.06.55 0 .53.32.79.96.79.88 0 1.81-.37 2.81-1.1 1-.73 1.73-1.59 2.19-2.58l.06-.13.11-.21.17-.08c.13 0 .19.06.19.17l-.08.24-1.54 4.14h-8.94z"/></svg>',
  styles: []
})
export class IconProductCnlComponent {
  constructor() { }

  @Input() svgClass = '';
}
