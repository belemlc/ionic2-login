import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { LoginPage } from '../login/login';

/**
 * Generated class for the IntoLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-into-login',
  templateUrl: 'into-login.html',
})
export class IntoLoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private statusBar: StatusBar) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntoLoginPage');
  }

  private enterAccount() {
    this.navCtrl.push(LoginPage);
  }

  private registerAccount() {
    this.navCtrl.push(LoginPage);
  }

}
