import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuestoesPage } from './questoes';

@NgModule({
  declarations: [
    QuestoesPage,
  ],
  imports: [
    IonicPageModule.forChild(QuestoesPage),
  ],
})
export class QuestoesPageModule {}
