import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BudgetService } from '../../services/budget.service';
import { Observable, Subscribable } from 'rxjs';

@Component({
  selector: 'app-budget-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './budget-form.component.html',
  styleUrl: './budget-form.component.scss'
})
export class BudgetFormComponent {

  budgetForm: FormGroup;
  services = [
    { name: 'Fer una campanya SEO', price: 300 },
    { name: 'Fer una campanya de publicitat', price: 400 },
    { name: 'Fer una pàgina web', price: 500 }];
  
  totalCost = 0;
  budgets$ : Observable<undefined> | Subscribable<undefined> | Promise<undefined> | undefined;
  clientName: string | undefined;
  phone: number | undefined;
  email: string | undefined;
 
 
  constructor(private fb: FormBuilder, private budgetService: BudgetService) {
    this.budgetForm = this.fb.group({
      clientName: [''],
      phone: [''],
      email: [''],
      seo: [false],
      publicity: [false],
      webpage: [false]
    });
    
    this.budgetForm.valueChanges.subscribe(_values => {
      this.calculateTotal();
    });
  }
  
  calculateTotal() {
    const selectedServices = Object.keys(this.budgetForm.value).filter(key =>
      this.budgetForm.value[key] === true).map(key => this.services.find(service =>
        service.name.toLowerCase().includes(key)));
    
      this.totalCost = selectedServices.reduce((acc, service) => acc + (service ? service.price : 0), 0);
  }

    addBudget() {
      const budget = {
        clientName: this.budgetForm.value.clientName,
        phone: this.budgetForm.value.phone,
        email: this.budgetForm.value.email,
        services: this.budgetForm.value,
        totalPrice: this.totalCost
      };
      
      this.budgetService.addBudget(budget);
    }  
  }

