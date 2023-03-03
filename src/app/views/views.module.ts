import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order/order.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    OrderComponent,
    OrderDetailsComponent,
    AddOrderComponent,
    PageNotFoundComponent
  ],
  imports: [CommonModule],
})
export class ViewsModule {}
