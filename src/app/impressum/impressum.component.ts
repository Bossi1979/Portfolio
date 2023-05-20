import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.scss']
})
export class ImpressumComponent implements OnInit {


  constructor(private service: ServiceService) {}


  ngOnInit(): void {

  }


  /**
   * Closes the impressum by setting the 'impressumShown' property of the service to false.
   */
  closeImpressum(): void {
    this.service.impressumShown = false;
  }

  
  /**
   * Returns the value of the 'impressumShown' property of the service.
   * @returns {boolean} - Indicates whether the impressum is currently shown or not. 
   */
  impressumShown() {
    return (this.service.impressumShown);
  }

}
