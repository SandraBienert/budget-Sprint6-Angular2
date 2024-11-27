import { Component } from '@angular/core';
import { BudgetsListComponent } from "./components/budgets-list/budgets-list.component";
import { ReactiveFormsModule } from '@angular/forms';






@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BudgetsListComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = 'budget-Sprint6-Angular2';
 

}
