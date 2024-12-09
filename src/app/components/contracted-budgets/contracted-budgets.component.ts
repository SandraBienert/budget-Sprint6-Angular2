import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../../services/budget.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contracted-budgets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contracted-budgets.component.html',
  styleUrl: './contracted-budgets.component.scss'
})
export class ContractedBudgetsComponent {
  budgets$ = this.budgetService.getBudgets();

  constructor(private budgetService: BudgetService) { 
    
  }
  
  ngOnInit(): void { }
  
  sortBudgetsByDate() {
    this.budgets$ = this.budgets$.pipe(map(budgets => budgets.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())));
  }
 
}  


