import {
  NgModule,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app.component';
import { ContainerComponent } from './container/container.component';
import { CardComponent } from './container/card/card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [App, ContainerComponent, CardComponent],
  imports: [BrowserModule, FormsModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
  ],
  bootstrap: [App],
})
export class AppModule {}
