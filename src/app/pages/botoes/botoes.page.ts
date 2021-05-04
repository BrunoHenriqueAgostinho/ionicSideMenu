import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-botoes',
  templateUrl: './botoes.page.html',
  styleUrls: ['./botoes.page.scss'],
})
export class BotoesPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }
  async presentAlert(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'subtitle',
      message: 'This is <b>alert</b> message.',
      buttons: ['Cancel', 'Open Modal', 'Delete']
    });
    await alert.present();
  }

  async presentAlertConfirm(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertPrompt(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Prompt!',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'placeholder 1'
        }, {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          value: 'hello',
          placeholder: 'placeholder 2'
        } , {
          name: 'paragraph',
          id: 'paragraph',
          type: 'textarea',
          placeholder: 'placeholder 3'
        }, {
          name: 'name3',
          value: 'http://ionicframework.com',
          type: 'url',
          placeholder: 'Favorite site ever'
        }, {
          name: 'name4',
          type: 'date',
          min: '2017-03-01',
          max: '2018-01-12'
        }, {
          name: 'name5',
          type: 'date'
        }, {
          name: 'name6',
          type: 'number',
          min: -5,
          max: 10
        }, {
          name: 'name7',
          type: 'number'
        }, {
          name: 'name8',
          type: 'password',
          placeholder: 'Advenced Attributes',
          cssClass: 'specialClass',
          attributes: {
            maxlength: 4,
            inputMode: 'decimal'
          }
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log('Confirm Ok', data);
            console.log('Confirm Ok', data.name1);
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertRadio(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Radio',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: 'Radio 1',
          value: 'value1',
          checked: true
        }, {
          name: 'radio2',
          type: 'radio',
          label: 'Radio 2',
          value: 'value2'
        }, {
          name: 'radio3',
          type: 'radio',
          label: 'Radio 3',
          value: 'value3'
        }, {
          name: 'radio4',
          type: 'radio',
          label: 'Radio 4',
          value: 'value4'
        }, {
          name: 'radio5',
          type: 'radio',
          label: 'Radio 5',
          value: 'value5'
        }, {
          name: 'radio6',
          type: 'radio',
          label: 'Radio 6',
          value: 'value6'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (radio) => {
            console.log('Confirm Ok');
            console.log('Confirm Ok', radio);
          }
        }
      ]
    });
    await alert.present();
  }

  async presentAlertCheckbox(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Checkbox',
      inputs: [
        {
          name: 'checkbox1',
          type: 'checkbox',
          label: 'Checkbox1',
          value: 'value1',
          checked: true
        }, {
          name: 'checkbox2',
          type: 'checkbox',
          label: 'Checkbox2',
          value: 'value2'
        }, {
          name: 'checkbox3',
          type: 'checkbox',
          label: 'Checkbox3',
          value: 'value3'
        }, {
          name: 'checkbox4',
          type: 'checkbox',
          label: 'Checkbox4',
          value: 'value4'
        }, {
          name: 'checkbox5',
          type: 'checkbox',
          label: 'Checkbox5',
          value: 'value5'
        }, {
          name: 'checkbox6',
          type: 'checkbox',
          label: 'Checkbox6',
          value: 'value6'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('ConfirmCancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log('ConfirmOk', data);
          }
        }
      ]
    });

    await alert.present();
  }
}
