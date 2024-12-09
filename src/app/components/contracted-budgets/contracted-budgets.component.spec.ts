import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractedBudgetsComponent } from './contracted-budgets.component';

describe('ContractedBudgetsComponent', () => {
  let component: ContractedBudgetsComponent;
  let fixture: ComponentFixture<ContractedBudgetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractedBudgetsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractedBudgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
