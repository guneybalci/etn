import { Order } from "./order";

export class OrderItem {
  id: number;
  orderNo: number;
  outgoingAddress: string;
  destinationAddress: string;
  quantity: number;
  unitOfQuantity: string;
  weight: number;
  unitOfWeight: string;
  productCode: number;
  note: string;
  status: string
}
