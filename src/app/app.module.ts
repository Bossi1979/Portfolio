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
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { ShadowsComponent } from './shadows/shadows.component';
import { PortfolioHeadlinesComponent } from './portfolio-headlines/portfolio-headlines.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { UpArrowComponent } from './up-arrow/up-arrow.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { EmailSendComponent } from './email-send/email-send.component';

import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PortaitComponent,
    MyHeadlineComponent,
    BgShapesComponent,
    ReferenceLinksComponent,
    AboutMeComponent,
    SkillsComponent,
    ShadowsComponent,
    PortfolioHeadlinesComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    UpArrowComponent,
    ImpressumComponent,
    EmailSendComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
