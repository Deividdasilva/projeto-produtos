import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Categoria } from '../../../services/categoria/categoria.interface';
import { CategoriaService } from '../../../services/categoria/categoria.service';

@Component({
  selector: 'app-list-categoria',
  templateUrl: './list-categoria.component.html',
  styleUrls: ['./list-categoria.component.css']
})
export class ListCategoriaComponent implements OnInit {
  categoria: Categoria[] = [];
  filteredCategorias: Categoria[] = [];
  searchTerm: string = '';
  categoriaToDelete: Categoria | null = null;
  @ViewChild('deleteModal') deleteModal: any;

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.loadCategorias();
  }

  loadCategorias(): void {
    this.categoriaService.getCategorias()
      .subscribe((data) => {
        this.categoria = data;
        this.filterCategorias();
      });
  }

  filterCategorias(): void {
    this.filteredCategorias = this.categoria.filter((categoria: Categoria) =>
      categoria.titulo?.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }


  editCategoria(categoria: Categoria): void {
    this.router.navigate(['/categorias/edit', categoria.id]);
  }

  // deleteCategoria(categoria: Categoria): void {
  //   this.categoriaToDelete = categoria;
  //   if (this.categoriaToDelete) {
  //     this.modalService.open(this.deleteModal, { centered: true });
  //   }
  // }

  deleteCategoria(categoria: Categoria): void {
    this.categoriaToDelete = categoria;
    if (this.categoriaToDelete && typeof this.categoriaToDelete.id === 'number') {
      this.modalService.open(this.deleteModal, { centered: true });
    } else {
      // Aqui você pode lidar com o caso em que o id é undefined
      console.error('Erro: Tentativa de deletar uma categoria sem um ID válido.');
      // Pode adicionar alguma lógica aqui para informar ao usuário ou tratar o erro
    }
  }


  // confirmDeleteAction(): void {
  //   if (this.categoriaToDelete) {
  //     this.categoriaService.deleteCategoria(this.categoriaToDelete.id)
  //       .subscribe(() => {
  //         this.loadCategorias();
  //       });
  //   }

  //   this.categoriaToDelete = null;

  //   this.modalService.dismissAll();
  // }

  confirmDeleteAction(): void {
    // Verifique se categoriaToDelete e categoriaToDelete.id são válidos antes de proceder
    if (this.categoriaToDelete && typeof this.categoriaToDelete.id === 'number') {
      this.categoriaService.deleteCategoria(this.categoriaToDelete.id)
        .subscribe(() => {
          this.loadCategorias(); // Recarrega as categorias após a exclusão bem-sucedida
        }, error => {
          console.error('Erro ao deletar a categoria:', error);
          // Aqui você pode adicionar tratamento de erros, como informar ao usuário que a operação falhou
        });
    } else {
      console.error('Tentativa de deletar uma categoria sem um ID válido');
      // Informar ao usuário ou tratar de outra maneira que o id não é válido
    }
  }


  addCategoria(): void {
    this.router.navigate(['/categorias/add']);
  }
}
