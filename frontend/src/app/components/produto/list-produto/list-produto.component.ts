import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Produto } from '../../../services/produto/produto.interface';
import { ProdutoService } from '../../../services/produto/produto.service';

@Component({
  selector: 'app-list-produto',
  templateUrl: './list-produto.component.html',
  styleUrls: ['./list-produto.component.css']
})
export class ListProdutoComponent implements OnInit {
  produtos: Produto[] = [];
  filteredProdutos: Produto[] = [];
  searchTerm: string = '';
  produtoToDelete: Produto | null = null;
  @ViewChild('deleteModal') deleteModal: any;

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.loadProdutos();
  }

  loadProdutos(): void {
    this.produtoService.getProdutos()
      .subscribe((data) => {
        this.produtos = data;
        this.filterProdutos();
      });
  }

  filterProdutos(): void {
    this.filteredProdutos = this.produtos.filter(produto =>
      produto.titulo.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  editProduto(produto: Produto): void {
    this.router.navigate(['/produtos/edit', produto.id]);
  }

  deleteProduto(produto: Produto): void {
    this.produtoToDelete = produto;
    if (this.produtoToDelete) {
      this.modalService.open(this.deleteModal, { centered: true });
    }
  }

  confirmDeleteAction(): void {
    if (this.produtoToDelete) {
      this.produtoService.deleteProduto(this.produtoToDelete.id)
        .subscribe(() => {
          this.loadProdutos();
        });
    }

    this.produtoToDelete = null;

    this.modalService.dismissAll();
  }

  addProduto(): void {
    this.router.navigate(['/produtos/add']);
  }
}
