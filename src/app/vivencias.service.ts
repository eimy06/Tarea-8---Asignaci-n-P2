import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VivenciasService {

  private vivencias: any[] = [];

  constructor() { }

  agregarVivencia(vivencia: any) {
    this.vivencias.push(vivencia);
    
  }

  getVivencias() {
    return this.vivencias;
  }
}
