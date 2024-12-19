import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditCategoriaComponent } from './edit-categoria.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CategoriaService } from '../../../services/categoria/categoria.service';
import { ProdutoService } from '../../../services/produto/produto.service';

describe('EditCategoriaComponent', () => {
  let component: EditCategoriaComponent;
  let fixture: ComponentFixture<EditCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditCategoriaComponent],
      imports: [HttpClientTestingModule],
      providers: [CategoriaService, ProdutoService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
