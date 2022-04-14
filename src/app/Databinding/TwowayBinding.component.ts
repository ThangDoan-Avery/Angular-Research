// a-component-inline
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway',
  template: `
    <div>
      <h3>Twoway Binding</h3>
      <p>Thắng: {{ name }}</p>
      <input
        #tagInputName
        class="w-25 form-control"
        (keyup)="changeName(tagInputName.value)"
        (keydown)="changeName(tagInputName.value)"
        (keypress)="changeName(tagInputName.value)"
      />
      <hr />
      <p>2waybinding</p>
      <input [(ngModel)]="name" class="w-25 form-control" />
      <hr />
      <div class="d-flex">
        <div class="card w-25">
          <img [src]="product.img" alt="..." />
          <div class="card-body">
            <p>{{ product.name }}</p>
            <p>{{ product.price }}</p>
            <button class="btn bg-dark text-danger">Add to card</button>
          </div>
        </div>
        <div class="w-50 ml-5">
          <div class="form-group">
            <p>id</p>
            <input class="form-control" #id [(ngModel)]="product.id" />
          </div>
          <div class="form-group">
            <p>name</p>
            <input class="form-control" #name1 [(ngModel)]="product.name" />
          </div>
          <div class="form-group">
            <p>price</p>
            <input class="form-control" #price [(ngModel)]="product.price" />
          </div>
          <div class="form-group">
            <p>img</p>
            <input class="form-control" #img [(ngModel)]="product.img" />
          </div>
          <button
            class="btn btn-success"
            (click)="
              changProduct(id.value, name1.value, price.value, img.value)
            "
          >
            Update
          </button>
        </div>
      </div>
    </div>
  `,
})
export class TowWayBidingComponent implements OnInit {
  product: Product = {
    id: 1,
    name: 'IPHONE',
    price: 1000,
    img: 'https://picsum.photos/id/20/100',
  };

  name: string = 'Thắng đẹp trai';

  changeName(name: string): void {
    this.name = name;
  }

  changProduct(id: string, name: string, price: string, img: string): void {
    this.product.id = Number(id);
    this.product.name = name;
    this.product.price = Number(price);
    this.product.img = img;
  }

  constructor() {}

  ngOnInit() {}
}

interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
}
