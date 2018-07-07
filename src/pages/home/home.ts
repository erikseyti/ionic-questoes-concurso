import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuestoesPage } from '../questoes/questoes';
import { RespostasPage } from '../respostas/respostas';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  chamarQuestoesPage()
  {
    this.navCtrl.push(QuestoesPage);
  }

  chamarResposta()
  {
    this.navCtrl.push(RespostasPage);
  }

}
