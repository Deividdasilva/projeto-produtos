import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListCategoriaComponent } from './list-categoria.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CategoriaService } from '../../../services/categoria/categoria.service';

describe('ListCategoriaComponent', () => {
  let component: ListCategoriaComponent;
  let fixture: ComponentFixture<ListCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListCategoriaComponent],
      imports: [HttpClientTestingModule],
      providers: [CategoriaService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
