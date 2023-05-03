import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  selectedMenuBtn: number = 0;
  mobileMenu: boolean = false;
  animation: boolean = false;


  ngOnInit(): void {
    
  }


  navSelected(navMenu: number): void {
    this.selectedMenuBtn = navMenu;
    this.removeMenuUnderlines();
    let selectedMenuId = document.getElementById(`menuId${navMenu}`);
    selectedMenuId?.classList.add('colorGreen');
  }

  removeMenuUnderlines(){
    for (let i = 1; i < 8; i++) {
      let MenuIds = document.getElementById(`menuId${i}`);
      MenuIds?.classList.remove('colorGreen');
    }
  }

  showMenu(){
    this.animation = true;
    setTimeout(() => {
      this.mobileMenu = true;
      this.animation = false;
    }, 150);
    
  }

  hideMenu(){
    this.mobileMenu = false;
  }

  mobilMenuSelected(menuId: number){
    setTimeout(() => {
      this.hideMenu();
      this.removeMenuUnderlines();
      if (menuId != 7){
        this.selectedMenuBtn = menuId -3;
        this.navSelected(this.selectedMenuBtn);
      }
    }, 500);
  }
}
