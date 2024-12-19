import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoriaComponent } from './components/categoria/add-categoria/add-categoria.component';
import { ListCategoriaComponent } from './components/categoria/list-categoria/list-categoria.component';
import { EditCategoriaComponent } from './components/categoria/edit-categoria/edit-categoria.component';
import { AddProdutoComponent } from './components/produto/add-produto/add-produto.component';
import { EditProdutoComponent } from './components/produto/edit-produto/edit-produto.component';
import { ListProdutoComponent } from './components/produto/list-produto/list-produto.component';

const routes: Routes = [
  { path: '', redirectTo: 'produtos', pathMatch: 'full' },

  // Rotas para Categoria
  { path: 'categorias/add', component: AddCategoriaComponent },
  { path: 'categorias/edit/:id', component: EditCategoriaComponent },
  { path: 'categorias', component: ListCategoriaComponent },

  // Rotas para produto
  { path: 'produtos/add', component: AddProdutoComponent },
  { path: 'produtos/edit/:id', component: EditProdutoComponent },
  { path: 'produtos', component: ListProdutoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
