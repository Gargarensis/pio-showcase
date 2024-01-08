import { Component } from '@angular/core';
import { Order } from '../entities/order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  order: Order = {
    name: 'Gianni',
    surname: 'Boss',
    address: 'Via Roma 13',
    goods: ''
  }

}
