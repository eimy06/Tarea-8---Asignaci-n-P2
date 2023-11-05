import { Injectable } from '@angular/core';
import { Vivencia } from './vivencia.model';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  private vivencias: Vivencia[] = []; 

  constructor() { }

  agregarVivencia(vivencia: Vivencia) {
    this.vivencias.push(vivencia);
   
  }

  getVivencias() {
    return this.vivencias;
  }

  getVivencia(id: string) {
   
    return this.vivencias.find(vivencia => vivencia.id === id);
  }
}
