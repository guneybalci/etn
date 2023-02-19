import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../models/order';
import { ListResponseModel } from '../models/listResponseModel';
import { OrderItem } from '../models/orderItem';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  apiUrl = 'https://localhost:44309/api/';
  constructor(private httpClient: HttpClient) {}

  getOrders(): Observable<ListResponseModel<Order>> {
    let newPath = this.apiUrl + 'orders/getall';
    return this.httpClient.get<ListResponseModel<Order>>(newPath);
  }

  getOrdersByProduct(
    productCode: number
  ): Observable<ListResponseModel<Order>> {
    let newPath =
      this.apiUrl + 'orders/getbyproduct?productCode=' + productCode;
    return this.httpClient.get<ListResponseModel<Order>>(newPath);
  }

  update(order: Order) {
    console.log(order)
    let orderItem = new OrderItem();
      orderItem.id =  Number(order.id),
      orderItem.orderNo = Number(order.orderNo),
      orderItem.status = order.status,
      orderItem.outgoingAddress = "Ay Mahallesi",
      orderItem.destinationAddress ="Mit Mah.",
      orderItem.weight = 500,
      orderItem.unitOfWeight = "Ton",
      orderItem.quantity = 34,
      orderItem.unitOfQuantity = "Palet",
      orderItem.productCode = 111;
      orderItem.note = "10'a kadar teslim"

    return this.httpClient.post(this.apiUrl + 'orders/update', orderItem);
  }
}
