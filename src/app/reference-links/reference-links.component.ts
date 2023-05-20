import { Component } from '@angular/core';

@Component({
  selector: 'app-reference-links',
  templateUrl: './reference-links.component.html',
  styleUrls: ['./reference-links.component.scss']
})
export class ReferenceLinksComponent {


  /**
   * Navigates to the contact section of the page by changing the URL hash to '#contact'.
   */
  goToContact() {
    window.location.href = '#contact';
  }
}
