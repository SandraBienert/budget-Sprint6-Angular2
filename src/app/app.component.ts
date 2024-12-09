import { Component} from '@angular/core';
import { BudgetsListComponent } from "./components/budgets-list/budgets-list.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BudgetsListComponent],
  template: `
  <app-budgets-list></app-budgets-list>
  `
  ,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'budget-Sprint6-Angular2';
  
}

