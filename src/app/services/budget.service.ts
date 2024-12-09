import { Injectable, Signal, WritableSignal, signal } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class BudgetService {
 
 
  private budgets: WritableSignal<any[]> = signal([]);
  
  addBudget(budget: any) {
   this.budgets.set([...this.budgets(), budget]);
  }
  
  getBudgets(): Signal<any[]> {
    return this.budgets;
  }
  
  calculateTotalPrice(budgetForm: FormGroup): number {
    
    let total = 0;
  
    if (budgetForm.value.seoCampaign) total += 300;
    if (budgetForm.value.adsCampaign) total += 400;
    if (budgetForm.value.webCampaign) {
      total += 500;
      total += (budgetForm.value.numPages + budgetForm.value.numLanguages) * 30; // Afegim el cost de pàgines i idiomes només si webCampaign és seleccionat 
    } 
      return total;
    }

   
}


  
  
