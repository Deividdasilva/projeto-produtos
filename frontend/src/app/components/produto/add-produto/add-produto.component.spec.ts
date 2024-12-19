import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddProdutoComponent } from './add-produto.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProdutoService } from '../../../services/produto/produto.service';

describe('AddProdutoComponent', () => {
  let component: AddProdutoComponent;
  let fixture: ComponentFixture<AddProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddProdutoComponent],
      imports: [HttpClientTestingModule],
      providers: [ProdutoService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
