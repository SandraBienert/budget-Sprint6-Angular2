import { Component } from '@angular/core';
import { BudgetsListComponent } from "./components/budgets-list/budgets-list.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BudgetsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'budget-Sprint6-Angular2';
}
