import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Order } from 'src/app/models/order';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  orders: Order[] = [];
  dataLoaded = false;
  filterText="";

  constructor(
    private orderService: OrderService,
    private activatedRoute: ActivatedRoute,
    private toastrService:ToastrService,
    private cartService:CartService
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['productCode']) {
        this.getOrdersByProduct(params['productCode']);
      } else {
        this.getOrders();
      }
    });
  }

  getOrders() {
    this.orderService.getOrders().subscribe((response) => {
      this.orders = response.data;
      this.dataLoaded = true;
    });
  }

  getOrdersByProduct(productCode: number) {
    this.orderService.getOrdersByProduct(productCode).subscribe((response) => {
      this.orders = response.data;
      this.dataLoaded = true;
    });
  }

  addToCart(order:Order){
    this.toastrService.success("'Siparişleri Yönet' menüsüne eklendi.",order.orderNo.toString() + "'nolu siparişiniz;")
    this.cartService.addToCart(order)
  }
}
