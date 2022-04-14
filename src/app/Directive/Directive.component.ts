import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  template: `
    <div style="margin-bottom: 400px" class="container">
      <h3>Directive</h3>
      <div *ngIf="status; else divDangNhap">
        <p>Hello {{ useName }}</p>
      </div>
      <!-- <div *ngIf="!status" >
        <button class="btn btn-danger" (click)="DangNhap()">Đăng nhập</button>
      </div> -->
      <!-- mặc đinh ng Template không hiển thị trên giao diện -->
      <ng-template #divDangNhap
        ><button class="btn btn-danger" (click)="dangNhap()">
          Đăng nhập
        </button></ng-template
      >
      <hr />
      <div class="form-group">
        <p>Nhập vào 1 số</p>
        <input class="form-control" #so />
        <button class="btn btn-success mt-2" (click)="kiemTraSo(so.value)">
          Kiểm tra số
        </button>
        <div *ngIf="number % 2 === 0" class="alert alert-success mt-2">
          Số chẵn
        </div>
        <div *ngIf="number % 2 !== 0" class="alert alert-danger mt-2">
          Số lẻ
        </div>
      </div>
      <hr />
      <h3>*ngSwitch</h3>
      <div class="form-group">
        <p>Chọn chức vụ</p>
        <select #slChucVu class="form-control" [(ngModel)]="maChucVu">
          <option value="1">Giám đốc</option>
          <option value="2">Quản lý</option>
          <option value="3">Nhân viên</option>
        </select>
      </div>
      <div class="form-group" [ngSwitch]="maChucVu">
        <div *ngSwitchCase="1" class="alert alert-danger mt-2">Giám đốc</div>
        <div *ngSwitchCase="2" class="alert alert-primary mt-2">Quản lý</div>
        <div *ngSwitchCase="3" class="alert alert-success mt-2">Nhân viên</div>
        <div *ngSwitchDefault class="alert alert-warning mt-2">Mặc định</div>
      </div>
    </div>
  `,
})
export class DirectiveComponent implements OnInit {
  number: number = 3;
  status: boolean = false;
  useName: string = 'Hello Thắng';
  maChucVu: string = '0';

  dangNhap(): void {
    this.status = true;
  }

  kiemTraSo(so: string) {
    this.number = Number(so);
  }

  constructor() {}

  ngOnInit() {}
}
