import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImpressumComponent } from './impressum/impressum.component';
import {EmailSendComponent} from './email-send/email-send.component';

const routes: Routes = [
  // {
  //   path: 'email_send',
  //   component: EmailSendComponent,
  // },
  // {
  //   path: '', redirectTo: 'bookings', pathMatch:'full'
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
