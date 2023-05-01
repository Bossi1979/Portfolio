import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  skillsBages =[
    {
      icon: '../../assets/img/skills/angular-icon.png',
      text: 'Angular',
      animate: false,
    },
    {
      icon: '../../assets/img/skills/ts-icon.png',
      text: 'TypeScript',
      animate: false,
    },
    {
      icon: '../../assets/img/skills/javascript-icon.png',
      text: 'JavaScript',
      animate: false,
    },
    {
      icon: '../../assets/img/skills/html-icon.png',
      text: 'HTML',
    },
    {
      icon: '../../assets/img/skills/firebase-icon.png',
      text: 'Firebase',
      animate: false,
    },
    {
      icon: '../../assets/img/skills/git-icon.png',
      text: 'GIT',
      animate: false,
    },
    {
      icon: '../../assets/img/skills/css-icon.png',
      text: 'CSS',
      animate: false,
    },
    {
      icon: '../../assets/img/skills/api-icon.png',
      text: 'Rest-Api',
    },
    {
      icon: '../../assets/img/skills/scrum-icon.png',
      text: 'Scrum',
      animate: false,
    },
    {
      icon: '../../assets/img/skills/material-icon.png',
      text: 'Material Design',
      animate: false,
    },

  ]
  
mouseMove(index: number): void {
  this.skillsBages[index].animate = true;
  setTimeout(() => {
    this.skillsBages[index].animate = false;
  }, 125);
}



}
