import { TestBed, async, inject } from '@angular/core/testing';

import { AccesoDetalleGuard } from './acceso-detalle.guard';

describe('AccesoDetalleGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccesoDetalleGuard]
    });
  });

  it('should ...', inject([AccesoDetalleGuard], (guard: AccesoDetalleGuard) => {
    expect(guard).toBeTruthy();
  }));
});
