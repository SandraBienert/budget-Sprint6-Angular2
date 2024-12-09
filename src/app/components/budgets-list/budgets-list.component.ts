
import { Component, OnInit, Renderer2} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { PanelComponent } from '../panel/panel.component';
import { BudgetService } from '../../services/budget.service';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../../shared/modal/modal.component';
import { BudgetFormComponent } from "../budget-form/budget-form.component";
import { ContractedBudgetsComponent } from "../contracted-budgets/contracted-budgets.component";


@Component({
  selector: 'app-budgets-list',
  standalone: true,
  imports: [ReactiveFormsModule, PanelComponent, CommonModule, ModalComponent, BudgetFormComponent, ContractedBudgetsComponent],
  templateUrl: './budgets-list.component.html',
  styleUrls: ['./budgets-list.component.scss'],
  providers: [BudgetService]
})

export class BudgetsListComponent   {
  
  budgetForm: FormGroup;
  totalPrice: number = 0;
  showPanel: boolean = false;
  borderCyan: boolean = false;
  
  constructor(
    private fb: FormBuilder,
    private budgetService: BudgetService,
    private renderer: Renderer2
  ) {
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

 openModal() {
   const modalElement = document.getElementById('#exampleModal');
   if (modalElement) {
     this.renderer.setStyle(modalElement, 'display', 'block');
     this.renderer.addClass(modalElement, 'show');
     this.renderer.setAttribute(modalElement, 'aria-modal', 'true');
     this.renderer.setAttribute(modalElement, 'role', 'dialog');
   }
  }
   
  closeModal() {
    const modalElement = this.renderer.selectRootElement('#exampleModal');
    if(modalElement){
    this.renderer.setStyle(modalElement, 'display', 'none');
    this.renderer.removeClass(modalElement, 'show');
    this.renderer.removeAttribute(modalElement, 'aria-modal');
    this.renderer.removeAttribute(modalElement, 'role');
    }
  }
}  