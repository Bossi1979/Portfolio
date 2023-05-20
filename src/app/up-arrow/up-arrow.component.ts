import { Component } from '@angular/core';

@Component({
  selector: 'app-up-arrow',
  templateUrl: './up-arrow.component.html',
  styleUrls: ['./up-arrow.component.scss']
})
export class UpArrowComponent {
  changeImg = false;


  /**
   * Sets the 'changeImg' property to true, indicating that the image should be changed.
   */
  changeImage() {
    this.changeImg = true;
  }


  /**
   * Sets the 'changeImg' property to false, indicating that the image change not nesseccary.
   */
  returnChangeImg() {
    this.changeImg = false;
  }


  /**
   * Navigates to the section with the ID 'myHeadline' by changing the URL hash to '#myHeadline'.
   */
  goToMyHeadline() {
    window.location.href = '#myHeadline';
  }
}
