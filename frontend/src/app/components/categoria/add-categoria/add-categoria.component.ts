import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaService } from '../../../services/categoria/categoria.service';

@Component({
  selector: 'app-add-categoria',
  templateUrl: './add-categoria.component.html',
  styleUrls: ['./add-categoria.component.css']
})
export class AddCategoriaComponent implements OnInit {
  newCategoria: any = {
    titulo: ''
  };

  constructor(
    private categoriaService: CategoriaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Nenhuma ação necessária se apenas adicionando categoria sem produtos vinculados
  }

  addCategoria(): void {
    this.categoriaService.addCategoria(this.newCategoria).subscribe(() => {
      this.router.navigate(['/categorias']);  // Ajuste conforme necessário
    }, error => {
      console.error('Erro ao adicionar a categoria:', error);
    });
  }

  goBack(): void {
    this.router.navigate(['/categorias']);  // Ajuste conforme necessário
  }
}
