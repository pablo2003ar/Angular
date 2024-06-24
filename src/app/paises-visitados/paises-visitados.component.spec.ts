import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisesVisitadosComponent } from './paises-visitados.component';

describe('PaisesVisitadosComponent', () => {
  let component: PaisesVisitadosComponent;
  let fixture: ComponentFixture<PaisesVisitadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaisesVisitadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaisesVisitadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
