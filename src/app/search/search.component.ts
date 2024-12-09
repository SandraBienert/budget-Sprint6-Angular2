import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../budget.service';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {
  
  budgets$ = this.budgetService.getBudgets();
  private searchTerm$ = new BehaviorSubject<string>('');
  filteredBudgets$ = combineLatest([this.budgets$, this.searchTerm$]).pipe(
    map(([budgets, searchTerm]) => 
      budgets.filter(budget => budget.clientName.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  );

  constructor(private budgetService: BudgetService) {}

  ngOnInit(): void {}

  searchBudgets(term: string) {
    this.searchTerm$.next(term);
  }

  sortBudgetsByDate() {
    this.budgets$ = this.budgets$.pipe(
      map(budgets => budgets.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()))
    );
  }

  sortBudgetsByPrice() {
    this.budgets$ = this.budgets$.pipe(
      map(budgets => budgets.sort((a, b) => a.totalPrice - b.totalPrice))
    );
  }

  sortBudgetsAlphabetically() {
    this.budgets$ = this.budgets$.pipe(
      map(budgets => budgets.sort((a, b) => a.clientName.localeCompare(b.clientName)))
    );
  }
}
