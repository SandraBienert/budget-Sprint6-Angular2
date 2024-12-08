import { Component, Renderer2} from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent {
  constructor(private renderer: Renderer2) { } // Injectem Renderer2

  closeModal() {
    const modalElement = this.renderer.selectRootElement('#exampleModal');
    if(modalElement){
    this.renderer.setStyle(modalElement, 'display', 'none');
    this.renderer.removeClass(modalElement, 'show');
    this.renderer.removeAttribute(modalElement, 'aria-modal');
    this.renderer.removeAttribute(modalElement, 'role');
    }
  }
}
