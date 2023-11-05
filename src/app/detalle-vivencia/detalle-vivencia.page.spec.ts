import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleVivenciaPage } from './detalle-vivencia.page';

describe('DetalleVivenciaPage', () => {
  let component: DetalleVivenciaPage;
  let fixture: ComponentFixture<DetalleVivenciaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetalleVivenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
