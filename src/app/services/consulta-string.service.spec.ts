import { TestBed } from '@angular/core/testing';

import { ConsultaStringService } from './consulta-string.service';

describe('ConsultaStringService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsultaStringService = TestBed.get(ConsultaStringService);
    expect(service).toBeTruthy();
  });
});
