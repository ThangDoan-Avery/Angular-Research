import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BaiTapLayout2Module } from './component/BaiTapLayout2/BaiTapLayout2.module';
import { DemoComponent } from './component/Demo/Demo.component';
import { DataBindingModule } from './Databinding/DataBinding.module';
import { DirectiveModule } from './Directive/Directive.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, //Nơi chứa thẻ component
    DemoComponent,
  ],
  imports: [
    BrowserModule, //Nơi chứa các module khác muốn sử dụng module này
    DataBindingModule,
    BaiTapLayout2Module,
    DirectiveModule,
  ],
  providers: [], //Nơi import các service
  bootstrap: [AppComponent], //các thẻ component muốn sử dụng được trong index.html
})
export class AppModule {}
