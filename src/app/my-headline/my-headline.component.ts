import { Component } from '@angular/core';

@Component({
  selector: 'app-my-headline',
  templateUrl: './my-headline.component.html',
  styleUrls: ['./my-headline.component.scss']
})
export class MyHeadlineComponent {


  /**
   * Navigates to the contact section of the page by changing the URL hash to '#contact'.
   */
  goToContact() {
    window.location.href = '#contact';
  }
}
