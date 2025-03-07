import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPaisesComponent } from './list-paises.component';

describe('ListPaisesComponent', () => {
  let component: ListPaisesComponent;
  let fixture: ComponentFixture<ListPaisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListPaisesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPaisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
