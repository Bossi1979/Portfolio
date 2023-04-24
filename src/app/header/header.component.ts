import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  selectedMenuBtn: number = 0;


  navSelected(navMenu: number): void {
    console.log(navMenu);
    this.selectedMenuBtn = navMenu;
  }
}
