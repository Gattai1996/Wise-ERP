import { TestBed } from '@angular/core/testing';

import { BuscaTotalInvoicesService } from './busca-total-invoices.service';

describe('BuscaTotalInvoicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuscaTotalInvoicesService = TestBed.get(BuscaTotalInvoicesService);
    expect(service).toBeTruthy();
  });
});
