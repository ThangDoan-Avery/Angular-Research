import { NgModule } from '@angular/core';
import { BaiTapLayout2Component } from './BaiTapLayout2.component';
import { BTHeader2Component } from './BTHeader2.component';
import { Content2Component } from './Content2.component';
import { Footer2Component } from './Footer2.component';
import { SideBar2Component } from './SideBar2.component';

@NgModule({
  exports: [BaiTapLayout2Component],
  declarations: [
    BaiTapLayout2Component,
    BTHeader2Component,
    Content2Component,
    Footer2Component,
    SideBar2Component,
  ],
})
export class BaiTapLayout2Module {}
