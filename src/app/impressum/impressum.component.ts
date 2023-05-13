import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.scss']
})
export class ImpressumComponent implements OnInit {


  constructor(private service: ServiceService) {

  }

  ngOnInit(): void {

  }

  closeImpressum(): void {
    this.service.impressumShown = false;
  }

  impressumShown() {
    return (this.service.impressumShown);
  }

}
