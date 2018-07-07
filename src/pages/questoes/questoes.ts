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

private questao1;
private questao2;
private questao3;
private questao4;
private questao5;
public listaResposta=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  chamarResposta()
  {

    this.listaResposta.push(this.questao1);
    this.listaResposta.push(this.questao2);
    this.listaResposta.push(this.questao3);
    this.listaResposta.push(this.questao4);
    this.listaResposta.push(this.questao5);
    console.log(this.listaResposta);

    this.navCtrl.push(RespostasPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestoesPage');
  }



}
