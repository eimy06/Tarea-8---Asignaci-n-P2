import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../registro.service';

@Component({
  selector: 'app-vivencias',
  templateUrl: './vivencias.page.html',
  styleUrls: ['./vivencias.page.scss'],
})
export class VivenciasPage {

  titulo: string = '';
  fecha: string = '';
  descripcion: string = '';
  foto: string = '';
  audio: string = '';

  constructor(private registroService: RegistroService) {}

  guardarVivencia() {
    const vivencia = {
      titulo: this.titulo,
      fecha: this.fecha,
      descripcion: this.descripcion,
      foto: this.foto,
      audio: this.audio,
    };

    this.registroService.agregarVivencia(vivencia);

    this.titulo = '';
    this.fecha = '';
    this.descripcion = '';
  }

}
