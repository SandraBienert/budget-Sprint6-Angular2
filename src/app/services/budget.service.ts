import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

// Defineix la interfície Budget per tipar els pressupostos
interface Budget {
  clientName: string;
  phone: string;
  email: string;
  totalPrice: number;
  services: {
    seoCampaign: boolean;
    adsCampaign: boolean;
    webCampaign: boolean;
    numPages?: number; // Opcional, només si WebCampaign està seleccionat
    numLanguages?: number; // Opcional, només si WebCampaign està seleccionat
  };
}
@Injectable({
  providedIn: 'root'
})

export class BudgetService {

  private budgetsSubject = new BehaviorSubject<any[]>([]);
  budgets$ = this.budgetsSubject.asObservable();
  
  addBudget(budget: any) {
    this.budgetsSubject.next([...this.budgetsSubject.value, budget]);
  
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


  
  
