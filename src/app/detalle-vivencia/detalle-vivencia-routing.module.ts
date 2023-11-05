import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleVivenciaPage } from './detalle-vivencia.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleVivenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleVivenciaPageRoutingModule {}
