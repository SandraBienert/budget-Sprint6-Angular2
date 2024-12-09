import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
// No cal importar environment. Si estàs en producció, pots habilitar el mode producció de manera manual 

const production = false; // Canvia a true si estàs preparant una build de producció 
if (production) {
  enableProdMode();
} bootstrapApplication(AppComponent).catch(err => console.error(err));
