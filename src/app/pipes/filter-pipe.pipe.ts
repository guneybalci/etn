import { Pipe, PipeTransform } from '@angular/core';
import { Order } from '../models/order';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Order[], filterText: string): Order[] {
    filterText = filterText ? filterText.toLocaleLowerCase():"";
    return filterText?value.filter((o:Order)=> o.status.toLocaleLowerCase().indexOf(filterText) !==-1):value;
  }

}
