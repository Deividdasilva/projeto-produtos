import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../../../services/produto/produto.service';
import { Produto } from '../../../services/produto/produto.interface';
import { CategoriaService } from '../../../services/categoria/categoria.service';

@Component({
  selector: 'app-edit-produto',
  templateUrl: './edit-produto.component.html',
  styleUrls: ['./edit-produto.component.css']
})
export class EditProdutoComponent implements OnInit {
  produto: Produto = {
    id: 0,
    titulo: '',
    descricao: '',
    categoriaId: undefined
  };

  categorias: any[] = [];

  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  // ngOnInit(): void {
  //   const produtoId = +this.route.snapshot.params['id'];
  //   if (!isNaN(produtoId)) {
  //     this.produtoService.getProduto(produtoId)
  //       .subscribe((data) => {
  //         this.produto = data;
  //         console.log(this.produto);
  //       });
  //   } else {
  //     console.error('ID da produto inválido.');
  //   }
  // }

  ngOnInit(): void {
    const produtoId = +this.route.snapshot.params['id'];
    if (!isNaN(produtoId)) {
      // Carregar os detalhes do produto
      this.produtoService.getProduto(produtoId).subscribe({
        next: (data) => {
          this.produto = data;
        },
        error: (err) => console.error('Erro ao carregar o produto:', err)
      });
    } else {
      console.error('ID do produto inválido.');
    }

    // Carregar todas as categorias disponíveis
    this.categoriaService.getCategorias().subscribe({
      next: (data) => {
        this.categorias = data;
      },
      error: (err) => console.error('Erro ao carregar categorias:', err)
    });
  }

  updateProduto(): void {
    this.produtoService.updateProduto(this.produto)
      .subscribe(() => {
        this.router.navigate(['/produtos']);
      });
  }

  voltar(): void {
    this.router.navigate(['/produtos']); // Altere o caminho conforme necessário
  }
}
