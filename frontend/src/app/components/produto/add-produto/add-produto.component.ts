import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from '../../../services/produto/produto.service';
import { CategoriaService } from '../../../services/categoria/categoria.service';

@Component({
  selector: 'app-add-produto',
  templateUrl: './add-produto.component.html',
  styleUrls: ['./add-produto.component.css']
})
export class AddProdutoComponent {
  newProduto: any = {
    titulo: '',
    descricao:'',
    categoriaId: null
  };

  categorias: any[] = [];

  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.categoriaService.getCategorias().subscribe({
      next: (data) => this.categorias = data,
      error: (err) => console.error('Erro ao carregar categorias:', err)
    });
  }

  addProduto(): void {
    this.produtoService.addProduto(this.newProduto)
      .subscribe(() => {
        this.router.navigate(['/produtos']);
      });
  }

  voltar(): void {
    this.router.navigate(['/produtos']);
  }
}
