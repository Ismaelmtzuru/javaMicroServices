import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarIdEscuelaComponent } from './buscar-id-escuela.component';

describe('BuscarIdEscuelaComponent', () => {
  let component: BuscarIdEscuelaComponent;
  let fixture: ComponentFixture<BuscarIdEscuelaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscarIdEscuelaComponent]
    });
    fixture = TestBed.createComponent(BuscarIdEscuelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
