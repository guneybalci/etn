
export interface Order{
    id: number,
    orderNo: number,
    outgoingAddress: string,
    destinationAddress: string,
    quantity: number,
    unitOfQuantity: string,
    weight: number,
    unitOfWeight: string,
    productCode: number,
    note: string,
    status: string
}
