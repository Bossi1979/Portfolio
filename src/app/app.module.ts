import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { PortaitComponent } from './portait/portait.component';
import { MyHeadlineComponent } from './my-headline/my-headline.component';
import { BgShapesComponent } from './bg-shapes/bg-shapes.component';
import { ReferenceLinksComponent } from './reference-links/reference-links.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PortaitComponent,
    MyHeadlineComponent,
    BgShapesComponent,
    ReferenceLinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
