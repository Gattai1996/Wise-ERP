import { TestBed } from '@angular/core/testing';

import { ConsultaCnpjService } from './consulta-cnpj.service';

describe('ConsultaCnpjService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsultaCnpjService = TestBed.get(ConsultaCnpjService);
    expect(service).toBeTruthy();
  });
});
