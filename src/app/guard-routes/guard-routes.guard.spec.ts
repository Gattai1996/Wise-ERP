import { TestBed, async, inject } from '@angular/core/testing';

import { GuardRoutesGuard } from './guard-routes.guard';

describe('GuardRoutesGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuardRoutesGuard]
    });
  });

  it('should ...', inject([GuardRoutesGuard], (guard: GuardRoutesGuard) => {
    expect(guard).toBeTruthy();
  }));
});
