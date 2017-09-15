import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IntoLoginPage } from './into-login';

@NgModule({
  declarations: [
    IntoLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(IntoLoginPage),
  ],
})
export class IntoLoginPageModule {}
