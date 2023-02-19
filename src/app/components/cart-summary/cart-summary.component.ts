import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from 'src/app/models/cartItem';
import { Order } from 'src/app/models/order';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {
  cartItems:CartItem[]=[];

  constructor(private cartService:CartService,private toastrService:ToastrService){}
  ngOnInit(): void {
    this.getCart()
  }

  getCart(){
    this.cartItems = this.cartService.list();
  }

  removeFromCart(order:Order){
    this.toastrService.warning("'Sipariş Yönet' menüsünden silindi.",order.orderNo + "'nolu siparişniz;")
  }
}
