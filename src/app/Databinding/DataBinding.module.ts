import { NgModule } from '@angular/core';
import { DataBindingComponent } from './DataBiding.component';
import { OnewayComponent } from './OnewayBinding.component';
import { TowWayBidingComponent } from './TwowayBinding.component';
// Import hỗ trợ 2wayBinding
import { FormsModule } from '@angular/forms';
import { BaiTapBindingComponent } from './BaiTapBinding.component';

@NgModule({
  exports: [DataBindingComponent],
  imports: [FormsModule],
  declarations: [
    DataBindingComponent,
    OnewayComponent,
    TowWayBidingComponent,
    BaiTapBindingComponent,
  ],
})
export class DataBindingModule {}
