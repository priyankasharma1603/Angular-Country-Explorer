import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-country-details-modal',
  templateUrl: './country-details-modal.component.html',
  styleUrls: ['./country-details-modal.component.css']
})
export class CountryDetailsModalComponent {
  @Input() country: any;
  @Input() visible: boolean = false;
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit(); // Emit close event when closing modal
  }
}
