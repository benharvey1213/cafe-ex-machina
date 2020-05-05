import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';
import { StatusComponent } from './status/status.component';
import { OrderListPageComponent } from './order-list-page/order-list-page.component';


const routes: Routes = [
  {path: 'order-list', component: OrderListPageComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'status', component: StatusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
