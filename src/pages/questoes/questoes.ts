import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RespostasPage } from '../respostas/respostas';

/**
 * Generated class for the QuestoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-questoes',
  templateUrl: 'questoes.html',
})
export class QuestoesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  chamarResposta()
  {
    this.navCtrl.push(RespostasPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestoesPage');
  }



}
