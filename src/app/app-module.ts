import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http'; // ← ajoute ça

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Departement } from './Pages/departement/departement';

@NgModule({
  declarations: [App, Departement],
  imports: [CommonModule, BrowserModule, AppRoutingModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(), // ← ajoute ça
  ],
  bootstrap: [App],
})
export class AppModule {}