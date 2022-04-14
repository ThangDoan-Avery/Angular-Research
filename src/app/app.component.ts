import { Component } from '@angular/core';

@Component({
  //decorator
  selector: 'app-root', //selector của thẻ component
  templateUrl: './app.component.html', //đường dẫn đến file giao diện
  styleUrls: ['./app.component.scss'], //Đường dẫn đến fle css
})
export class AppComponent {
  title = 'angularfe70';
}
