import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bt-header2',
  template: ` <div class="header">Header2 component</div> `,
  styles: [
    `
      .header {
        background-color: green;
        color: #fff;
        padding: 15px;
        text-align: center;
      }
    `,
  ],
})
export class BTHeader2Component implements OnInit {
  constructor() {}

  ngOnInit() {}
}
