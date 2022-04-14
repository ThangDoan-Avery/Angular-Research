import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai-tap-binding',
  template: `<div class="container">
      <h3>Register Form</h3>
      <div class="form-group">
        <p>Email:</p>
        <input class="form-control w-25 " #emailInput [(ngModel)]="email" />
      </div>
      <div class="form-group">
        <p>FullName:</p>
        <input class="form-control w-25 " #fullNameInput />
      </div>
      <button
        (click)="changeFullname(fullNameInput.value)"
        class="btn btn-success"
      >
        Submit
      </button>
    </div>
    <div class="mt-3 container">
      <p>Email: {{ email }}</p>
      <p>Fullname: {{ fullName }}</p>
    </div> `,
})
export class BaiTapBindingComponent implements OnInit {
  email: string = 'Dùng [(ngModel)]';
  fullName: string = 'Dùng event binding';

  changeFullname(fullname: string): void {
    this.fullName = fullname;
  }

  constructor() {}

  ngOnInit() {}
}
