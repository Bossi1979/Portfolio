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

  
  /**
   * Updates the sendingActive property by setting it to true, indicating that a sending action is active.
   * After a delay of 4000 milliseconds, the sendingActive property is set to false to indicate that the 
   * sending action is complete.
   */
  update(){
    this.sendingActive = true;
    setTimeout(() => {
      this.sendingActive = false;
    },4000);
  }


  /**
   * Updates the sendResponse property by setting it to true, indicating that a response is being sent.
   * After a delay of 4000 milliseconds, the sendResponse property is set to false to indicate
   * that the response is complete.
   */
  responseUpdate(){
    setTimeout(() => {
      this.sendResponse = true;
    },4000);
    setTimeout(() => {
      this.sendResponse = false;
    },6500);
  }


  /**
   * Updates the sendError property by setting it to true, indicating that an error occurred 
   * during the response.
   * After a delay of 4000 milliseconds, the sendError property is set to false to indicate that
   * the error handling is complete.
   */
  errorResponseFailed(){
    setTimeout(() => {
      this.sendError = true;
    },4000);
    setTimeout(() => {
      this.sendError = false;
    },6500);
  }
}
