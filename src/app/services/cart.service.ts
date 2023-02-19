import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(order:Order){
    let item = CartItems.find(c=>c.order.id===order.id);
    if(!item){
      let cartItem = new CartItem();
      cartItem.orderNo = order.orderNo,
      cartItem.status = order.status,
      cartItem.order = order
      CartItems.push(cartItem);
    }
  }

  removeFromCart(order:Order){
    let item = CartItems.find(c=>c.order.id===order.id);
    CartItems.splice(CartItems.indexOf(item),1)
  }

  list():CartItem[]{
    return CartItems;
  }
}
