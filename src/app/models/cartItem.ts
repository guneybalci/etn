import { Order } from "./order";

export class CartItem {
  id:number;
  orderNo: number;
  status: string;
  order:Order;
}
