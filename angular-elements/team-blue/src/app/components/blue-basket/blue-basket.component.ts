import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blue-basket',
  templateUrl: './blue-basket.component.html',
  styleUrls: ['./blue-basket.component.css']
})
export class BlueBasketComponent implements OnInit {
  count = 0;
  classname = 'empty'

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.currentCount.subscribe((count) => {
      this.count = count;
      this.classname = this.count === 0 ? 'empty' : 'filled';
    });
  }

}
