import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  ngOnInit(): void {
    this.test();
  }

valid = false;
inputs = document.getElementsByTagName('input');
text = document.getElementsByTagName('textarea');
feedback = document.getElementsByClassName('feedback');

invalidText = false;

formValidation() {
  // Get all the inputs on the page
  const inputs = document.getElementsByTagName('input');
  const text = document.getElementsByTagName('textarea');
  const feedback = document.getElementsByClassName('feedback');
  // Check if all inputs are valid
  this.valid = true;
 
  for(let i = 0; i < inputs.length; i++) {
    if(!inputs[i].checkValidity()) {
      this.valid = false;
      // Show feedback for invalid input
      inputs[i].classList.add('is-invalid');
      feedback[i].classList.add('invalid-feedback');
    } else {
      inputs[i].classList.remove('is-invalid');
      feedback[i].classList.remove('invalid-feedback');
    }
  }

  for(let z= 0; z < text.length; z++) {
    if(!text[z].checkValidity()){
      this.valid = false;
      text[z].classList.add('is-invalid');
      feedback[2].classList.add('invalid-feedback');
    }else{
      text[z].classList.remove('is-invalid');
      feedback[2].classList.remove('invalid-feedback');
    }
  }
  this.formsubmit();
  return false;


}

formsubmit() {
  if(this.valid) {
    // Submit the form if all inputs are valid
    document.getElementsByTagName('form')[0].submit();
    this.inputs[0].value = '';
    this.inputs[1].value = '';
    this.text[0].value = '';

  }
}

nameValidation(){
  this.valid = true;
  if(!this.inputs[0].checkValidity()){
    this.valid = false;
    this.inputs[0].classList.add('is-invalid');
    this.feedback[0].classList.add('invalid-feedback');
  } else {
    this.inputs[0].classList.remove('is-invalid');
    this.feedback[0].classList.remove('invalid-feedback');
  }
}

emailValidation(){
  this.valid = true;
  if(!this.inputs[1].checkValidity()){
    this.valid = false;
    this.inputs[1].classList.add('is-invalid');
    this.feedback[1].classList.add('invalid-feedback');
  } else {
    this.inputs[1].classList.remove('is-invalid');
    this.feedback[1].classList.remove('invalid-feedback');
  }
}

textValidation(){
  this.valid = true;
  if(!this.text[0].checkValidity()){
    this.valid = false;
    this.text[0].classList.add('is-invalid');
    this.feedback[2].classList.add('invalid-feedback');
  } else {
    this.text[0].classList.remove('is-invalid');
    this.feedback[2].classList.remove('invalid-feedback');
  }
}

test(){
  document.getElementById('test').classList;
  setTimeout(() => {
    this.invalidText = document.getElementById('test').classList.contains('invalid-feedback');
  },500)
  
}

}
