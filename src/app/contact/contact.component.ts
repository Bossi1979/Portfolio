import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  valid = false;
  inputs = document.getElementsByTagName('input');
  text = document.getElementsByTagName('textarea');
  feedback = document.getElementsByClassName('feedback');
  invalidName = false;
  invalidEmail = false;
  invalidText = false;

  constructor(private service: ServiceService) { }


  ngOnInit(): void {
    this.checkForInvalidData();
  }


  /**
   * Performs form validation on the inputs and text areas within the form.
   * Updates the feedback elements with validation messages.
   * Submits the form if all inputs are valid.
   * 
   * @returns {boolean} - Indicates whether the form submission should proceed or not.
   */
  formValidation() {
    const inputs = document.getElementsByTagName('input');
    const text = document.getElementsByTagName('textarea');
    const feedback = document.getElementsByClassName('feedback');
    this.valid = true;
    this.checkInputValidation(inputs, feedback);
    this.checkTextValidarion(text, feedback);
    this.formsubmit();
    return false;
  }


  /**
   * Checks the validity of the input elements and updates their feedback elements accordingly.
   * 
   * @param {HTMLCollectionOf<HTMLInputElement>} inputs - The collection of input elements to validate. 
   * @param {HTMLCollectionOf<HTMLElement>} feedback - The collection of feedback elements associated with the inputs. 
   */
  checkInputValidation(inputs, feedback) {
    for (let i = 0; i < inputs.length; i++) {
      if (!inputs[i].checkValidity()) {
        this.valid = false;
        // Show feedback for invalid input
        inputs[i].classList.add('is-invalid');
        feedback[i].classList.add('invalid-feedback');
      } else {
        inputs[i].classList.remove('is-invalid');
        feedback[i].classList.remove('invalid-feedback');
      }
    }
  }


  /**
   * Checks the validity of the text area elements and updates their feedback element accordingly.
   * 
   * @param {HTMLCollectionOf<HTMLTextAreaElement>} text - The collection of text area elements to validate. 
   * @param {HTMLCollectionOf<HTMLElement>} feedback - The collection of feedback elements associated with the text areas. 
   */
  checkTextValidarion(text, feedback) {
    for (let z = 0; z < text.length; z++) {
      if (!text[z].checkValidity()) {
        this.valid = false;
        text[z].classList.add('is-invalid');
        feedback[2].classList.add('invalid-feedback');
      } else {
        text[z].classList.remove('is-invalid');
        feedback[2].classList.remove('invalid-feedback');
      }
    }
  }


  /**
   * Submits the form if all inputs are valid.
   */
  formsubmit() {
    if (this.valid) {
      this.service.update();
      let form = document.getElementsByTagName('form')[0];
      let formData = new FormData(form);
      this.sendFormData(formData);
    }
  }


  /**
   * Sends the form data to a specified URL using a POST request.
   * 
   * @param {FormData} formData - The form data to be sent. 
   */
  async sendFormData(formData) {
    try {
      const response = await fetch('https://stefan-boskamp.de/send_mail2.php', {
        method: 'POST',
        body: formData,
      });
      this.checkResponse(response);
    } catch (error) {
      console.log('Fehler:', error);
      this.service.errorResponseFailed();
    }
  }


  /**
   * Checks the response from the server and performs appropriate actions based on the response status.
   * 
   * @param {Response} response - The response object received from the server.
   */
  async checkResponse(response) {
    if (response.ok) {
      const confirmation = await response.text();
      this.service.responseUpdate();
      this.inputs[0].value = '';
      this.inputs[1].value = '';
      this.text[0].value = '';
    } else {
      const error = await response.text();
      this.service.errorResponseFailed();
    }
  }

  /**
   * Validates the name input field and updates its feedback element accordingly.
   */
  nameValidation() {
    this.valid = true;
    if (!this.inputs[0].checkValidity()) {
      this.valid = false;
      this.inputs[0].classList.add('is-invalid');
      this.feedback[0].classList.add('invalid-feedback');
    } else {
      this.inputs[0].classList.remove('is-invalid');
      this.feedback[0].classList.remove('invalid-feedback');
    }
  }


  /**
   * Validates the email input field and updates its feedback element accordingly.
   */
  emailValidation() {
    this.valid = true;
    if (!this.inputs[1].checkValidity()) {
      this.valid = false;
      this.inputs[1].classList.add('is-invalid');
      this.feedback[1].classList.add('invalid-feedback');
    } else {
      this.inputs[1].classList.remove('is-invalid');
      this.feedback[1].classList.remove('invalid-feedback');
    }
  }


  /**
   * Validates the textarea field and updates its feedback element accordingly.
   */
  textValidation() {
    this.valid = true;
    if (!this.text[0].checkValidity()) {
      this.valid = false;
      this.text[0].classList.add('is-invalid');
      this.feedback[2].classList.add('invalid-feedback');
    } else {
      this.text[0].classList.remove('is-invalid');
      this.feedback[2].classList.remove('invalid-feedback');
    }
  }


  /**
   * Checks for invalid data by updating the corresponding variables after a delay.
   */
  checkForInvalidData() {
    setTimeout(() => {
      this.invalidName = document.getElementById('name').classList.contains('invalid-feedback');
      this.invalidEmail = document.getElementById('email').classList.contains('invalid-feedback');
      this.invalidText = document.getElementById('textarea').classList.contains('invalid-feedback');
    }, 500)
  }
}
