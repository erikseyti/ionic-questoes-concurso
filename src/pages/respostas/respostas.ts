import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, reorderArray } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the RespostasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-respostas',
  templateUrl: 'respostas.html',
})
export class RespostasPage {

public listaRespostas=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public storage:Storage) {
    try
    {

    this.storage.get('questao1').then((q1) =>
    {
      console.log(q1);
      this.listaRespostas.push(q1);
    });

    this.storage.get('questao2').then((q2) =>{ this.listaRespostas.push(q2);});
    this.storage.get('questao3').then((q3) =>{ this.listaRespostas.push(q3);});
    this.storage.get('questao4').then((q4) =>{ this.listaRespostas.push(q4);});
    this.storage.get('questao5').then((q5) =>{ this.listaRespostas.push(q5);});

    console.log(this.listaRespostas);
  }
  catch(err)
  {
    alert(err);
  }

  }

  reorderItems(indexes){
    this.listaRespostas = reorderArray(this.listaRespostas, indexes);
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RespostasPage');
  }

}
