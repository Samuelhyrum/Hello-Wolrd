import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { NavComponent } from './components/template/nav/nav.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redireciona para a rota de login por padrão
  {
    path: '',
    component: NavComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'products', component: ProductCrudComponent },
      { path: 'products/create', component: ProductCreateComponent },
      { path: 'products/update/:id', component: ProductUpdateComponent },
      { path: 'products/delete/:id', component: ProductDeleteComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
