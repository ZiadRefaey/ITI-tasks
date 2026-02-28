import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardInfo } from '../container.component';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() info: CardInfo = {
    title: '',
    desc: '',
  };
  @Input() src = '';
  @Output() dataToSend = new EventEmitter<string>();
  @Output() data2ToSend = new EventEmitter<string>();
  sendData(data: string) {
    this.dataToSend.emit(data);
  }
  sendData2(data: string) {
    this.data2ToSend.emit(data);
  }
}
