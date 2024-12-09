import { TestBed } from '@angular/core/testing';
import { BudgetService } from './budget.service';
import { FormBuilder, FormGroup } from '@angular/forms';

describe('BudgetService', () => {
  let service: BudgetService;
  let formBuilder: FormBuilder;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BudgetService);
    formBuilder = TestBed.inject(FormBuilder);
  });

  it('should calculate the total price correctly', () => {
    const form: FormGroup = formBuilder.group({
      seoCampaign: [true],
      adsCampaign: [true],
      webCampaign: [true],
      numPages: [2],
      numLanguages: [2]
    });

    const totalPrice = service.calculateTotalPrice(form);
    expect(totalPrice).toBe(300 + 400 + 500 + (2 + 2) * 30); // 300 for SEO, 400 for Ads, 500 for Web, and 2 pages + 2 languages * 30 each
  });
});
