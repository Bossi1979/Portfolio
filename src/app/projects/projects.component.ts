import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {


projectData = [
  {
    imgSrc:'../../assets/img/projects/join-test-min.png',
    title:'Join',
    skills:'Javascript | HTML | CSS',
    description:'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',

  },
  {
    imgSrc:'../../assets/img/projects/join-test-min.png',
    title:'El Polo Loco',
    skills:'Javascript | HTML | CSS',
    description:'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and poison bottles to fight against the chickens.',

  },
  {
    imgSrc:'../../assets/img/projects/join-test-min.png',
    title:'Join',
    skills:'Javascript | HTML | CSS',
    description:'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',

  },
  {
    imgSrc:'../../assets/img/projects/join-test-min.png',
    title:'Join',
    skills:'Javascript | HTML | CSS',
    description:'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',

  },
  {
    imgSrc:'../../assets/img/projects/join-test-min.png',
    title:'Join',
    skills:'Javascript | HTML | CSS',
    description:'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',

  },
];
}
