import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleVivenciaPageRoutingModule } from './detalle-vivencia-routing.module';

import { DetalleVivenciaPage } from './detalle-vivencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleVivenciaPageRoutingModule
  ],
  declarations: [DetalleVivenciaPage]
})
export class DetalleVivenciaPageModule {}
