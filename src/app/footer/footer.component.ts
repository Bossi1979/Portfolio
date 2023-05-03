import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

showunderline = false;

showUnderline(){
  this.showunderline = true;
}

hideUnderline(){
  this.showunderline = false;
}
}
