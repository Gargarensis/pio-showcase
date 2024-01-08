import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { HomeComponent } from './home/home.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { ShowcaseComponent } from './showcase/showcase.component';

const routes: Routes = [
  { path: 'order',    component: OrderComponent },
  { path: 'home',     component: HomeComponent }, 
  { path: 'history',  component: OrderHistoryComponent }, 
  { path: 'showcase', component: ShowcaseComponent }, 
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, 
  { path: '**',   redirectTo: '/home', pathMatch: 'full' }, 
  // { path: '**', component: PageNotFoundComponent }, // TODO
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
