
import { Component} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { PanelComponent } from '../panel/panel.component';
import { BudgetService } from '../../services/budget.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-budgets-list',
  standalone: true,
  imports: [ReactiveFormsModule, PanelComponent, CommonModule],
  templateUrl: './budgets-list.component.html',
  styleUrls: ['./budgets-list.component.scss'],
  providers: [BudgetService]
})

export class BudgetsListComponent  {

  budgetForm: FormGroup;
  totalPrice: number = 0;
  showPanel: boolean = false;
  
  
  constructor(private fb: FormBuilder, private budgetService: BudgetService) {
    this.budgetForm = this.fb.group({
      seoCampaign: [false],
      adsCampaign: [false],
      webCampaign: [false],
      numPages: [1],
      numLanguages: [1],
    });

    this.budgetForm.valueChanges.subscribe(() => {
      this.calculateTotalPrice();
      this.showPanel = this.budgetForm.get('webCampaign')?.value;
    });
  }

  calculateTotalPrice(): void {
    this.totalPrice = this.budgetService.calculateTotalPrice(this.budgetForm);
  }
  
  onSettingsChange(settings: { numPages: number; numLanguages: number }) {
    this.budgetForm.patchValue({
      numPages: settings.numPages,
      numLanguages: settings.numLanguages,
    });
    
    this.calculateTotalPrice();
  
  }
}  