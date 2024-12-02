import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})

export class PanelComponent implements OnInit {

  @Output() settingsChange = new EventEmitter<{ numPages: number; numLanguages: number }>();
  panelForm = new FormGroup({
    numPages: new FormControl(1),
    numLanguages: new FormControl(1)
  });
  
  ngOnInit() {
    this.panelForm.valueChanges.subscribe(value => {
      this.settingsChange.emit({
        numPages: value.numPages ?? 0, 
        numLanguages: value.numLanguages ?? 0
      });
    });
  }
  
  increment(field: string) {
    const control = this.panelForm.get(field);
    if (control) {
      control.setValue((control.value ?? 0) + 1);
    }
  }
  
  decrement(field: string) {
    const control = this.panelForm.get(field);
    if (control) {
      const currentValue = control.value ?? 0;
      control.setValue(currentValue > 1 ? currentValue - 1 : 1);
    }
  }
}
