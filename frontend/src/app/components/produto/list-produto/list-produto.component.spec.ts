import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListProdutoComponent } from './list-produto.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProdutoService } from '../../../services/produto/produto.service';

describe('ListProdutoComponent', () => {
  let component: ListProdutoComponent;
  let fixture: ComponentFixture<ListProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListProdutoComponent],
      imports: [HttpClientTestingModule],
      providers: [ProdutoService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
