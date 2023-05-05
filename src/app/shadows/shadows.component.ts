import { Component, ElementRef, HostListener, OnInit} from '@angular/core';


@Component({
  selector: 'app-shadows',
  templateUrl: './shadows.component.html',
  styleUrls: ['./shadows.component.scss']
})
export class ShadowsComponent {
  
  shadowsContainerHeight: string='';
  sideHeight: string='';
  shadowsContainer = document.getElementById('shadowsContainer');
  constructor() {}

  // onload = () => {
  //   let sideHeight = document.documentElement.scrollHeight;
  //   console.log('rezise', sideHeight);
  //   this.shadowsContainerHeight = `${sideHeight}px`;

  // };
  

  @HostListener('window:resize')
  onResize() {
    this.test();
  }

  // @HostListener('window:onload')
  // onLoad() {
  //   this.test();
  // }

  test(){
    // this.sideHeight = 'unset;';
    // console.log('before', this.sideHeight);
    // document.getElementById('shadowsContainer').style.height = `${this.sideHeight}`;
    this.sideHeight = document.documentElement.scrollHeight.toString() + 'px';
    console.log(this.sideHeight);
    // document.getElementById('shadowsContainer').style.height = this.sideHeight;
  };


  
}


