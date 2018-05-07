import { DataService } from './../../services/data.service';
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-blue-buy',
  templateUrl: './blue-buy.component.html',
  styleUrls: ['./blue-buy.component.css'],
  encapsulation: ViewEncapsulation.Native 
})
export class BlueBuyComponent implements OnInit {
  
  @Input() sku: string;
  price = '';

  constructor(private dataService: DataService) {
   }

  ngOnInit() {
    this.price = this.dataService.getPrice(this.sku);
  }

  onBuy() {
    this.dataService.incrementCount();
  }

}
