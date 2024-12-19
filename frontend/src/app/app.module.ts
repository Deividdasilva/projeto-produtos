import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Componentes de Tipo de Produto
import { AddCategoriaComponent } from './components/categoria/add-categoria/add-categoria.component';
import { ListCategoriaComponent } from './components/categoria/list-categoria/list-categoria.component';
import { EditCategoriaComponent } from './components/categoria/edit-categoria/edit-categoria.component';

// Componentes de Produto
import { AddProdutoComponent } from './components/produto/add-produto/add-produto.component';
import { EditProdutoComponent } from './components/produto/edit-produto/edit-produto.component';
import { ListProdutoComponent } from './components/produto/list-produto/list-produto.component';

// Outros Componentes
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,

    // Declarações dos componentes de Tipo de produto
    AddCategoriaComponent,
    ListCategoriaComponent,
    EditCategoriaComponent,

    // Declarações dos componentes de Produto
    AddProdutoComponent,
    EditProdutoComponent,
    ListProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
