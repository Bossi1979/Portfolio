import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  showunderline = false;

  constructor(private service: ServiceService) {}


  /**
   * Sets the 'showunderline' property to true, indicating that the underline should be shown.
   */
  showUnderline() {
    this.showunderline = true;
  }


  /**
   * Sets the 'showunderline' property to false, indicating that the underline should be hidden.
   */
  hideUnderline() {
    this.showunderline = false;
  }


  /**
   * Sets the 'impressumShown' property of the service to true, indicating that the impressum should be shown.
   */
  openImpressum() {
    this.service.impressumShown = true;
  }
}
