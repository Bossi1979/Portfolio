import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-email-send',
  templateUrl: './email-send.component.html',
  styleUrls: ['./email-send.component.scss']
})


export class EmailSendComponent implements OnInit {
  

  constructor(public service: ServiceService) {

  }

  ngOnInit(): void {
   
  }

  
}
