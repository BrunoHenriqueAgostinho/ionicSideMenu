import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router, private alertController: AlertController) { }
  // Variáveis
  nome: String;
  idade: Number;
  sexo: String;

  // Mostrando valores no console
  getValores(){
    if (this.nome === undefined || this.idade === undefined || this.sexo === undefined){
      this.alertaUndefined();
    } else if (this.nome === '' || this.idade === null || this.sexo === ''){
      this.alertaUndefined();
    } else {
      console.log(this.nome);
      console.log(this.idade);
      console.log(this.sexo);
    }
  }
  // Enviando os valores dos inputs para outra página
  enviar(){
    if (this.nome === undefined || this.idade === undefined || this.sexo === undefined){
      this.alertaUndefined();
    } else if (this.nome === '' || this.idade === null || this.sexo === ''){
      this.alertaUndefined();
    } else {
      let navigationExtras: NavigationExtras = {
        state: {
          nome: this.nome,
          idade: this.idade,
          sexo: this.sexo
        }
      };
      this.router.navigate(['variaveis/detalhes'], navigationExtras);
    }
  }
  async alertaUndefined(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Atenção!',
      message: 'Preencha todos os campos antes de enviar.',
      buttons: ['OK']
    });
    await alert.present();
  }
  ngOnInit() {
  }

}
