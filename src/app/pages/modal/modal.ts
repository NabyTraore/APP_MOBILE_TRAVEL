import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
    testCheckboxResult: any;
    testCheckboxOpen: boolean;
    parisTime: string;
    Arrivees: false;
    Departs: false;

    constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController, public alertCtrl: AlertController) {

        this.parisTime = this.calculateTime('+1');
        if (this.dst(new Date())) {
            this.parisTime = this.calculateTime('+2');
        }
  }


  closeModal() {
    this.view.dismiss();
  }
    //Setting
    showSetting() {
        const alert = this.alertCtrl.create();
        alert.setTitle('Type de Mouvements');

        alert.addInput({
            type: 'checkbox',
            label: 'Les Départs',
            value: 'value1',
            checked: true
        });

        alert.addInput({
            type: 'checkbox',
            label: 'Les Arrivées',
            value: 'value2'
        });

        alert.addButton('Cancel');
        alert.addButton({
            text: 'Okay',
            handler: data => {
                console.log('Checkbox data:', data);
                this.testCheckboxOpen = false;
                this.testCheckboxResult = data;
            }
        });
        alert.present();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }
    // Determine if the client uses DST
    stdTimezoneOffset(today: any) {
        let jan = new Date(today.getFullYear(), 0, 1);
        let jul = new Date(today.getFullYear(), 6, 1);
        return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
    }

    dst(today: any) {
        return today.getTimezoneOffset() < this.stdTimezoneOffset(today);
    }
    calculateTime(offset: any) {
        // create Date object for current location
        let d = new Date();

// create new Date object for different city
        // using supplied offset
        let nd = new Date(d.getTime() + (3600000 * offset));
        return nd.toISOString();
    }

}
