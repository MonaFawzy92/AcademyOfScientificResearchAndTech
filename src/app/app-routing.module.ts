import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddOrderComponent } from './admin/components/add-order/add-order.component';
import { GenerateCodeComponent } from './user/components/generate-code/generate-code.component';
import { OrdersListComponent } from './user/components/generate-code/components/orders-list/orders-list.component';


const routes: Routes = [
  { path: '', component: AddOrderComponent },
  { path: 'addorder', component: AddOrderComponent },
  { path: 'code', component: GenerateCodeComponent },
  { path: 'list', component: OrdersListComponent },

  { path: '**', component: AddOrderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
