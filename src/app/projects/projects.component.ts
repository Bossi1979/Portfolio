import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {


  projectData = [
    {
      imgSrc: '../../assets/img/projects/join-test-min.png',
      title: 'Join',
      skills: 'Javascript | HTML | CSS',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      url: 'https://join.stefan-boskamp.de/',
      gitLink: 'https://github.com/Bossi1979/join',
    },
    {
      imgSrc: '../../assets/img/projects/join-test-min.png',
      title: 'El Polo Loco',
      skills: 'Javascript | HTML | CSS',
      description: 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and poison bottles to fight against the chickens.',
      url: 'https://el-pollo-locco.stefan-boskamp.de/',
      gitLink: 'https://github.com/Bossi1979/ElPolloLocco',
    },
    {
      imgSrc: '../../assets/img/projects/join-test-min.png',
      title: 'Join',
      skills: 'Javascript | HTML | CSS',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      url: 'https://el-pollo-locco.stefan-boskamp.de/',
      gitLink: '',
    },
    {
      imgSrc: '../../assets/img/projects/join-test-min.png',
      title: 'Join',
      skills: 'Javascript | HTML | CSS',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      url: 'https://el-pollo-locco.stefan-boskamp.de/',
      gitLink: '',
    },
    {
      imgSrc: '../../assets/img/projects/join-test-min.png',
      title: 'Join',
      skills: 'Javascript | HTML | CSS',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      url: 'https://el-pollo-locco.stefan-boskamp.de/',
      gitLink: '',
    },
  ];

  openUrl(i){
    let url = this.projectData[i].url;
    setTimeout(()=>{
      const newTab = window.open(url, '_blank');
    },500);
    // const newTab = window.open(url, '_blank');
  }

  openGitLink(i){
    let url = this.projectData[i].gitLink;
    setTimeout(()=>{
      const newTab = window.open(url, '_blank');
    },500);
  }
}
