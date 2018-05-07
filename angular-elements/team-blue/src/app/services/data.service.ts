import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private count = new BehaviorSubject<number>(0);

  private prices = {
    't_porsche': '66,00 €',
    't_fendt': '54,00 €',
    't_eicher': '58,00 €'
  }

  public currentCount = this.count.asObservable();

  constructor() { }

  public getPrice(sku: string): string {
    console.log(this.prices[sku]);
    return this.prices[sku];
  }

  public incrementCount() {
    this.count.next(this.count.getValue() + 1);
  }
}
