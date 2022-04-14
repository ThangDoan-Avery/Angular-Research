import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai-tap-layout2',
  template: `
    <div>
      <app-bt-header2></app-bt-header2>
      <div class="row">
        <div class="col-4">
          <app-side-bar2></app-side-bar2>
        </div>
        <div class="col-8">
          <app-content2></app-content2>
        </div>
      </div>

      <app-footer2></app-footer2>
    </div>
  `,
})
export class BaiTapLayout2Component implements OnInit {
  constructor() {}

  ngOnInit() {}
}
