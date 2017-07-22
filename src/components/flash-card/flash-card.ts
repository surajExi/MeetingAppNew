import { Component } from '@angular/core';


@Component({
  selector: 'flash-card',
  templateUrl: 'flash-card.html'
})
export class FlashCardComponent {

 flipped: boolean = false;

  text: string;

  constructor() {
   
  }
  flip(){
    this.flipped = !this.flipped;

}
}