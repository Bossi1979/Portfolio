import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  selectedMenuBtn: number = 0;


  navSelected(navMenu: number): void {
    this.selectedMenuBtn = navMenu;
    for (let i = 0; i < 4; i++) {
      let MenuIds = document.getElementById(`menuId${i}`);
      MenuIds?.classList.remove('colorGreen');
    }
    let selectedMenuId = document.getElementById(`menuId${navMenu}`);
    selectedMenuId?.classList.add('colorGreen');
  }
}
