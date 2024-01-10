import { Component, TemplateRef, inject } from '@angular/core';
import { Order } from '../entities/order';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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


  private modalService = inject(NgbModal);
	closeResult = '';

	open(content: TemplateRef<any>) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed`;
			},
		);
	}

}
