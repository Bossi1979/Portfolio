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


  /**
   * Updates the selectedMenuBtn property with the provided navMenu value and applies the
   * appropriate styling to the selected menu button.
   * 
   * @param {number} navMenu - The index of the selected menu button.
   */
  navSelected(navMenu: number): void {
    this.selectedMenuBtn = navMenu;
    this.removeMenuUnderlines();
    let selectedMenuId = document.getElementById(`menuId${navMenu}`);
    selectedMenuId?.classList.add('colorGreen');
  }


  /**
   * Removes the 'colorGreen' class from all menu buttons.
   */
  removeMenuUnderlines() {
    for (let i = 1; i < 8; i++) {
      let MenuIds = document.getElementById(`menuId${i}`);
      MenuIds?.classList.remove('colorGreen');
    }
  }


  /**
   * Shows the mobile menu by setting the 'animation' property to true and then updating 
   * the 'mobileMenu' property after a delay.
   */
  showMenu() {
    this.animation = true;
    setTimeout(() => {
      this.mobileMenu = true;
      this.animation = false;
    }, 150);
  }


  /**
   * Hides the mobile menu by setting the 'mobileMenu' property to false.
   */
  hideMenu() {
    this.mobileMenu = false;
  }


  /**
   * Handles the selection of a mobile menu item by hiding the menu, removing menu underlines, 
   * and updating the selected menu button.
   * 
   * @param {number} menuId - The index of the selected menu item. 
   */
  mobilMenuSelected(menuId: number) {
    setTimeout(() => {
      this.hideMenu();
      this.removeMenuUnderlines();
      if (menuId != 7) {
        this.selectedMenuBtn = menuId - 3;
        this.navSelected(this.selectedMenuBtn);
      }
    }, 500);
  }
}
