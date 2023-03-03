import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { AddOrderComponent } from './views/add-order/add-order.component';
import { OrderDetailsComponent } from './views/order-details/order-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutersEnum } from './constants/RoutersEnum';
import { OrderComponent } from './views/order/order.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: RoutersEnum.ORDERS,
    pathMatch: 'full',
  },
  {
    path: RoutersEnum.ORDERS,
    component: OrderComponent,
  },
  // {
  //   path: RoutersEnum.ALL_ORDERS,
  //   component: AllOrdersComponent,
  // },
  {
    path: RoutersEnum.ORDER_DETAILS,
    component: OrderDetailsComponent,
  },
  {
    path: RoutersEnum.ADD_ORDER,
    component: AddOrderComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
