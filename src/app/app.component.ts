import { Component} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BudgetsListComponent } from "./components/budgets-list/budgets-list.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BudgetsListComponent, ReactiveFormsModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = 'budget-Sprint6-Angular2';
  
}

