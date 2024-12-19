import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from './categoria.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private apiUrl = 'http://localhost:8080/categorias';

  constructor(private http: HttpClient) { }

  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.apiUrl);
  }

  addCategoria(categoria: Categoria): Observable<Categoria> {
    const url = `${this.apiUrl}`;
    return this.http.post<Categoria>(url, categoria);
  }

  getCategoria(id: number): Observable<Categoria> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Categoria>(url);
  }

  updateCategoria(categoria: Categoria): Observable<Categoria> {
    const url = `${this.apiUrl}/${categoria.id}`;
    return this.http.put<Categoria>(url, categoria);
  }

  deleteCategoria(categoriaId: number): Observable<void> {
    const url = `${this.apiUrl}/${categoriaId}`;
    return this.http.delete<void>(url);
  }
}
