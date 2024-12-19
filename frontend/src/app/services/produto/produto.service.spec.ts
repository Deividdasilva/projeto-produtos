import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProdutoService } from './produto.service';
import { Produto } from './produto.interface';

describe('ProdutoService', () => {
  let service: ProdutoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProdutoService]
    });
    service = TestBed.inject(ProdutoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve all Produtos', () => {
    const dummyProdutos: Produto[] = [
      {
        id: 1, titulo: 'Produto A',
        descricao: ''
      },
      {
        id: 2, titulo: 'Produto B',
        descricao: ''
      }
    ];

    service.getProdutos().subscribe(produtos => {
      expect(produtos.length).toBe(2);
      expect(produtos).toEqual(dummyProdutos);
    });

    // const req = httpMock.expectOne(service.apiUrl);
    const req = httpMock.expectOne(service.getApiUrl());
    expect(req.request.method).toBe('GET');
    req.flush(dummyProdutos);
  });
});
