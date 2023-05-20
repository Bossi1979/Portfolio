import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  impressumShown = false;
  sendingActive = false;
  intervalIds = [];
  sendResponse = false;
  sendError = false;
  

  constructor() { }

  update(){
    this.sendingActive = true;
    setTimeout(() => {
      this.sendingActive = false;
    },4000);
  }

  responseUpdate(){
    setTimeout(() => {
      this.sendResponse = true;
    },4000);
    setTimeout(() => {
      this.sendResponse = false;
    },6500);
  }

  errorResponseFailed(){
    setTimeout(() => {
      this.sendError = true;
    },4000);
    setTimeout(() => {
      this.sendError = false;
    },6500);
  }


  

  

}
