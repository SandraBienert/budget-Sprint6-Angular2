import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms'

@Component({
  selector: 'app-budgets-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './budgets-list.component.html',
  styleUrls: ['./budgets-list.component.scss'],
})

export class BudgetsListComponent {

  budgetForm: FormGroup;
  totalPrice: number = 0;
 
  constructor(private fb: FormBuilder) {
    this.budgetForm = this.fb.group({
      seoCampaign: false,
      adCampaign: false,
      webCampaign: false
    });


    this.budgetForm.valueChanges.subscribe((values: any) => {
      this.calculateTotalPrice(values);
    });

  }

  calculateTotalPrice(value: any) {
    this.totalPrice = 0;
    if (value.seoCampaign) {
      this.totalPrice += 300;
    }
    if (value.adCampaign) {
      this.totalPrice += 400;
    }
    if (value.webCampaign) {
      this.totalPrice += 500;
    }
  }

}
