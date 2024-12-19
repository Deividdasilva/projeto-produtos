import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../../../services/categoria/categoria.interface';
import { CategoriaService } from '../../../services/categoria/categoria.service';

@Component({
  selector: 'app-edit-categoria',
  templateUrl: './edit-categoria.component.html',
  styleUrls: ['./edit-categoria.component.css']
})
export class EditCategoriaComponent implements OnInit {
  categoria: Categoria = {
    id: 0,
    titulo: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoriaService: CategoriaService
  ) {}

  ngOnInit(): void {
    const categoriaId = +this.route.snapshot.params['id'];
    if (!isNaN(categoriaId)) {
      this.categoriaService.getCategoria(categoriaId).subscribe({
        next: (data) => this.categoria = data,
        error: () => console.error('Erro ao carregar a categoria.')
      });
    } else {
      console.error('ID da categoria inválida.');
    }
  }

  updateCategoria(): void {
    this.categoriaService.updateCategoria(this.categoria).subscribe({
      next: () => this.router.navigate(['/categorias']),
      error: () => console.error('Erro ao atualizar a categoria.')
    });
  }

  goBack(): void {
    this.router.navigate(['/categorias']);
  }
}
