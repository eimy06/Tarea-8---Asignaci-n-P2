import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Camera } from '@ionic-native/camera/ngx';
import { Media, MediaObject } from '@ionic-native/media/ngx';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {

  titulo: string = '';
  fecha: string = '';
  descripcion: string = '';
  foto: string = '';
  audio: MediaObject;

  constructor(private storage: Storage, 
              private camera: Camera, 
              private media: Media) {}

  tomarFoto() {
    const options = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      sourceType: this.camera.PictureSourceType.CAMERA,
      saveToPhotoAlbum: false
    };

    this.camera.getPicture(options).then((imageData) => {
      this.fotoTomada = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.error('Error al tomar la foto', err);
    });
  }

  seleccionarFoto() {
    const options = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: false
    };

    this.camera.getPicture(options).then((imageData) => {
      this.fotoTomada = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.error('Error al seleccionar la foto', err);
    });
  }

  iniciarGrabacion() {
    this.grabacionAudio = this.media.create('audio.mp3');
    this.grabacionAudio.startRecord();
  }

  detenerGrabacion() {
    this.grabacionAudio.stopRecord();
    this.grabacionAudio.release();
  }            
  guardarVivencia() {
    const vivencia = {
      titulo: this.titulo,
      fecha: this.fecha,
      descripcion: this.descripcion,
      foto: this.foto, 
      audio: this.audio 
    };

    this.storage.get('vivencias').then((vivencias) => {
      const vivenciasArray = vivencias || [];
      vivenciasArray.push(vivencia);
      this.storage.set('vivencias', vivenciasArray);
    });
  }

  borrarTodo() {
    this.titulo = '';
    this.fecha = '';
    this.descripcion = '';
  }


}
