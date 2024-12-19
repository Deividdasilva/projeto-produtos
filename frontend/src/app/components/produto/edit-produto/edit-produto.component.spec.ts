import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditProdutoComponent } from './edit-produto.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProdutoService } from '../../../services/produto/produto.service';

describe('EditProdutoComponent', () => {
  let component: EditProdutoComponent;
  let fixture: ComponentFixture<EditProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditProdutoComponent],
      imports: [HttpClientTestingModule],
      providers: [ProdutoService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
