import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vivencia } from '../vivencia.model';
import { VivenciasService } from '../vivencias.service'; 
@Component({
  selector: 'app-detalle-vivencia',
  templateUrl: './detalle-vivencia.page.html',
  styleUrls: ['./detalle-vivencia.page.scss'],
})
export class DetalleVivenciaPage implements OnInit {

  vivencia: Vivencia = { id: '', titulo: '', fecha: '', descripcion: '' };
  
  constructor(
    private route: ActivatedRoute,
    private vivenciasService: VivenciasService
  ) {}

  ngOnInit() {
    const vivenciaId = this.route.snapshot.paramMap.get('id');
    this.vivencia = this.vivenciasService.getVivencia(vivenciaId);
  }

}
