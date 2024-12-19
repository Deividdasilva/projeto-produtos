import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from './produto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  getApiUrl(): string {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://localhost:8080/produtos';

  constructor(private http: HttpClient) { }

  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrl);
  }

  getProduto(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.apiUrl}/${id}`);
  }

  addProduto(produto: Produto): Observable<Produto> {
    const url = `${this.apiUrl}`;
    return this.http.post<Produto>(url, produto);
  }

  updateProduto(produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(`${this.apiUrl}/${produto.id}`, produto);
  }

  deleteProduto(produtoId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${produtoId}`);
  }
}
