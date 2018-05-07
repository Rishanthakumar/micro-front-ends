import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { BlueBuyComponent } from './components/blue-buy/blue-buy.component';

import { DataService } from './services/data.service';
import { BlueBasketComponent } from './components/blue-basket/blue-basket.component';

@NgModule({
  declarations: [
    AppComponent,
    BlueBuyComponent,
    BlueBasketComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [],
  entryComponents: [
    BlueBuyComponent,
    BlueBasketComponent
  ]
})
export class AppModule { 
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const bluebuy = createCustomElement(BlueBuyComponent, { injector: this.injector });
    customElements.define('blue-buy', bluebuy);

    const bluebasket = createCustomElement(BlueBasketComponent, { injector: this.injector });
    customElements.define('blue-basket', bluebasket);
   }
}
