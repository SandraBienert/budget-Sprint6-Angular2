import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms'


@Component({
  selector: 'app-budgets-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ReactiveFormsModule],
  templateUrl: './budgets-list.component.html',
  styleUrls: ['./budgets-list.component.scss'],
})

export class BudgetsListComponent implements OnInit{

  budgetForm: FormGroup;
  totalPrice: number = 0;

  constructor(private fb: FormBuilder) {
    this.budgetForm = this.fb.group({
      seoCampaign: false,
      adsCampaign: false,
      webCampaign: false
    });
    
    this.budgetForm.valueChanges.subscribe((values: any) => {
      this.calculateTotalPrice(values);
    });
  
  }

  calculateTotalPrice(value: any) {
    this.totalPrice = 0;
    if (value.seoCampaign) {
      this.totalPrice += 300;
    }
    if (value.adsCampaign) {
      this.totalPrice += 400;
    }
    if (value.webCampaign) {
      this.totalPrice += 500;
    }
  }


  services = [
    { title: "Seo", description: "Programació d'una web responsive completa", price: 300 },
    { title: "Ads", description: "Programació d'una web responsive completa", price: 400 },
    { title: "Web", description: "Programació d'una web responsive completa", price: 500 }
  ];

 ngOnInit(): void {
   this.budgetForm = new FormGroup({
     seo: new FormControl(false),
     ads: new FormControl(false),
     web: new FormControl(false)
    });
  }

 
 

 


}
