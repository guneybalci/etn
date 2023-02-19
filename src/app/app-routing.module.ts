import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderUpdateComponent } from './components/order-update/order-update.component';
import { OrderComponent } from './components/order/order.component';

const routes: Routes = [
  {path:"",pathMatch:"full", component:OrderComponent},
  {path:"orders", component:OrderComponent},
  {path:"orders/product/:productCode",component:OrderComponent},
  {path:"orders/update",component:OrderUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
