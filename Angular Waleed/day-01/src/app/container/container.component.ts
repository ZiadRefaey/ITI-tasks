import { Component } from '@angular/core';
export interface CardInfo {
  title: string;
  desc: string;
}
const cardInfo = {
  title: 'card-1 title',
  desc: '',
};
const card2Info = {
  title: 'card-2 title',
  desc: '',
};
@Component({
  selector: 'app-container',
  standalone: false,
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent {
  info1: CardInfo = cardInfo;
  info2: CardInfo = card2Info;
  cardOneSrc: string = 'cards-bg/card-1.jpg';
  cardTwoSrc: string = 'cards-bg/card-2.jpg';
  dataFromChild = '';
  desc1 = '';
  desc2 = '';

  setDesc1(desc: string) {
    this.info1.desc = desc;
    this.desc1 = '';
  }
  setDesc2(desc: string) {
    this.info2.desc = desc;
    this.desc2 = '';
  }
  receiveData(data: string) {
    this.dataFromChild = data;
  }
}
