import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
 webSettings = { numPages: 1, numLanguages: 1 };


   updateTotal() {
    this.totalPrice = this.services.reduce((acc, service) => {
      return acc + (this.budgetForm.value[service.title] ? service.price : 0);
    }, 0) + (this.budgetForm.value.web ? this.calculateWebPrice() : 0);
  }

  calculateWebPrice() {
    return this.webSettings.numPages * this.webSettings.numLanguages * 30;
  }

  upWebSettings(settings: { numPages: number; numLanguages: number; }) {
    this.webSettings = settings;
    this.updateTotal();
  }


}
