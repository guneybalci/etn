import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
​import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { OrderComponent } from './components/order/order.component';
import { NaviComponent } from './components/navi/navi.component';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

import { ToastrModule } from 'ngx-toastr';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { OrderUpdateComponent } from './components/order-update/order-update.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    OrderComponent,
    NaviComponent,
    FilterPipePipe,
    CartSummaryComponent,
    OrderUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right",
      maxOpened: 2
    })
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
