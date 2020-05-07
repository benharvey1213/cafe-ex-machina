import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodDescComponent } from './food-desc/food-desc.component';
import { CategoryComponent } from './category/category.component';
import { OrderListPageComponent } from './order-list-page/order-list-page.component';
import { PaymentComponent } from './payment/payment.component';
import { StatusComponent } from './status/status.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodDescComponent,
    CategoryComponent,
    OrderListPageComponent,
    PaymentComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
