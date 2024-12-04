
import { CommonModule } from '@angular/common';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})

export class PanelComponent implements OnInit{
  @Output() settingsChange = new EventEmitter<{ numPages: number; numLanguages: number }>();
  
  // Form group for pages and languages
    panelForm = new FormGroup({
    numPages: new FormControl(1),
    numLanguages: new FormControl(1),
    });
  
    // State variable to track the visibility of the panel
    showPanel = false;

    
  ngOnInit() {
    this.panelForm.valueChanges.subscribe(value => {
      this.emitSettingsChange(); 
     
   });
  }

  private emitSettingsChange() {
    this.settingsChange.emit({
      numPages: this.panelForm.value.numPages || 0,
      numLanguages: this.panelForm.value.numLanguages || 0,
    });
  }
  
  increment(field: string) {
    const control = this.panelForm.get(field);
    if (control) {
      control.setValue((control.value || 0) + 1);
      this.emitSettingsChange();
    }
  }
  
  decrement(field: string) {
    const control = this.panelForm.get(field);
    if (control) {
      const currentValue = control.value || 0;
      if (currentValue > 0) {
        control.setValue(currentValue - 1);
        this.emitSettingsChange();
      }
    }
  }
  
  togglePanel() {
    this.showPanel = !this.showPanel;
  }
}
