import { Component, OnInit} from '@angular/core';
// import {LayoutModule} from '@angular/cdk/layout';
import {BreakpointObserver} from '@angular/cdk/layout';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Portfolio';
  // layout = new LayoutModule;

  constructor(
    // public layout: LayoutModule,
    public breakpoints: BreakpointObserver,

  ){

  }

  ngOnInit() {
    if(this.breakpoints.isMatched('(max-width: 800px)')){
      console.log('Width less than 800px');
    }

    this.breakpoints.observe('(max-width: 800px)').subscribe(console.info);
  }
}
