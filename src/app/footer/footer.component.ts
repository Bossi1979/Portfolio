import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  showunderline = false;

  constructor(private service: ServiceService) {

  }

  showUnderline() {
    this.showunderline = true;
  }

  hideUnderline() {
    this.showunderline = false;
  }

  openImpressum() {
    this.service.impressumShown = true;
  }
}
