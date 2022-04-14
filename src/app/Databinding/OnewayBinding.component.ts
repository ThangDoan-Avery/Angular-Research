import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oneway',
  template: `
    <div>
      <h3>Oneway Binding</h3>
      <h3 class="text-success">Cách 1-Interpolation: khi dữ liệu nằm ở HTML</h3>
      <p>{{ title }}</p>
      <p>Title: {{ renderTitle() }}</p>
      <input class="w-25 form-control" value="{{ title }}" />
      <hr />
      <h3 class="text-success mt-2">
        Cách 2-Properties Binding: khi dữ liệu nằm ở thuộc tính của thẻ
      </h3>
      <section [innerHTML]="'Hello' + title"></section>
      <input class="form-control w-25" [value]="title" />
      <img src="{{ imgSrc }}" class="w-25 mt-2 mr-2" alt="..." />
      <img [src]="imgSrc" class="w-25 mt-2" alt="..." />
      <hr />
      <h3 class="text-danger">
        Event binding : Thay đổi dữ liệu giao diện thông qua sự kiện (handle
        state react)
      </h3>
      <div class="form-group">
        <p>New title</p>
        <input #iTitle class="form-control w-25" />
        <button class="btn btn-success" (click)="changeTitle(iTitle.value)">
          Change title
        </button>
      </div>
    </div>
  `,
})
export class OnewayComponent implements OnInit {
  //MVVM : Model View View Modal
  // Tất cả dữ liệu trên giao diện phải là thuộc tính hoặc là phương thức của modal class
  imgSrc: string = 'https://i.pravatar.cc?u=10';
  title: string = 'Hello Thắng';
  constructor() {}

  changeTitle(newTitle: string): void {
    this.title = newTitle;
  }

  renderTitle = (): string => {
    return 'Frontend 70';
  };
  ngOnInit() {
    // let a:string = 'abc'
  }
}
