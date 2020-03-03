import { TestBed } from '@angular/core/testing';

import { BuscaInvoices } from './busca-invoices.service';

describe('ConsultaCnpjService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuscaInvoices = TestBed.get(BuscaInvoices);
    expect(service).toBeTruthy();
  });
});
