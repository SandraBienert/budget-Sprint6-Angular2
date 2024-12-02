import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
  
export class BudgetService {

  calculateTotal(services: any[], webSettings: { numPages: number; numLanguages: number; }) {
  
    let totalPrice = services.reduce((acc: any, service: { selected: any; price: any; }) => {
      return acc + (service.selected ? service.price : 0);
    }, 0);

    if (services.find((service: { title: string; }) => service.title === 'web')?.selected) {
     totalPrice +=  webSettings.numPages * webSettings.numLanguages * 30;
    }
     
    return totalPrice;
    }
}

  
  
