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
      imgSrc: '../../assets/img/projects/el_pollo.png',
      title: 'El Polo Loco',
      skills: 'Javascript | HTML | CSS',
      description: 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and poison bottles to fight against the chickens.',
      url: 'https://el-pollo-locco.stefan-boskamp.de/',
      gitLink: 'https://github.com/Bossi1979/ElPolloLocco',
    },
    {
      imgSrc: '../../assets/img/projects/pokedex.png',
      title: 'Pokedex',
      skills: 'Javascript | HTML | CSS | API',
      description: `The Pokédex (also spelled PokéDex, or Dex for short) is a hi-tech encyclopedic dictionary of Pokémon species that debuted in the very first Pokémon games, Pocket Monsters Aka and Midori.`,
      url: 'http://pokedex.stefan-boskamp.de/',
      gitLink: 'https://github.com/Bossi1979/pokedex',
    },
    {
      imgSrc: '../../assets/img/projects/ring-of-fire.png',
      title: 'Ring of fire',
      skills: 'Angular | Typescript | HTML | SCSS | Firebase | Material Design',
      description: `Ring of Fire is a drinking game where players draw cards from around the king's cup. Start a game, share your url with friends and play together online.`,
      url: 'https://ring-of-fire-1cf24.web.app/',
      gitLink: 'https://github.com/Bossi1979/ring_of_fire',
    },
  ];

  openUrl(i) {
    let url = this.projectData[i].url;
    setTimeout(() => {
      const newTab = window.open(url, '_blank');
    }, 500);
  }

  openGitLink(i) {
    let url = this.projectData[i].gitLink;
    setTimeout(() => {
      const newTab = window.open(url, '_blank');
    }, 500);
  }
}
