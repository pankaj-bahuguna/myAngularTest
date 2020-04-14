import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdcutListComponent } from './prodcut-list/prodcut-list.component';
import { PorductDetailComponent } from './porduct-detail/porduct-detail.component';


const routes: Routes = [
  { path: '', redirectTo: 'product-list', pathMatch: 'full' },
  { path: 'product-list', component: ProdcutListComponent },
  { path: 'product-details/:id', component: PorductDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
