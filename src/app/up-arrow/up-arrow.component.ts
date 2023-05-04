import { Component } from '@angular/core';

@Component({
  selector: 'app-up-arrow',
  templateUrl: './up-arrow.component.html',
  styleUrls: ['./up-arrow.component.scss']
})
export class UpArrowComponent {

  changeImg = false;


  changeImage() {
    this.changeImg = true;
  }

  returnChangeImg() {
    this.changeImg = false;
  }

  goToMyHeadline(){
    window.location.href = '#myHeadline';
  }

}
