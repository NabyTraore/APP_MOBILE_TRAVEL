import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import {RelationsService} from '../../services/relations/relation-service';
import {Tools} from '../../tools/Tools';

import {PairingPage} from '../pairing/pairing';
import {Travel} from '../../services/relations/model/Travel';
import {StatusBar} from '@ionic-native/status-bar';
import {VehiclesItem} from '../../services/relations/model/VehiclesItem';
import {RelationsItem} from '../../services/relations/model/RelationsItem';
import {Modal} from 'ionic-angular';

/**
 * Generated class for the RelationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-relation',
    templateUrl: 'relation.html',

})
export class RelationPage {
    testCheckboxOpen: boolean;
    testCheckboxResult;
    travel: Travel = new Travel();
    text: string;

    constructor(public navCtrl: NavController, public navParams: NavParams, relationsService: RelationsService,
                public alertCtrl: AlertController, private statusBar: StatusBar,
                public modal: ModalController) {
        console.log('Hello RelationsComponent Component');
        this.text = 'Hello World';

        this.statusBar.overlaysWebView(true);
        this.statusBar.backgroundColorByHexString('#ffa000');
        relationsService.listRelations(Tools.fillStartDate(), Tools.fillEndDate())
            .subscribe(data => this.travel = {
                name: data['name'],
                namespace: data['namespace'],
                header: data['header'],
                vehicles: data['vehicles']
            });
    }

    showAlert(vehiclesItem: VehiclesItem) {
        const alert = this.alertCtrl.create({
            title: 'Detail des Mouvements',
            // subTitle: '',
            message: 'N541: ' + vehiclesItem.vehicle.linkNumber + '-' + vehiclesItem.vehicle.periodicity + '\n' + 'Type de vehicule : ' + vehiclesItem.vehicle.vehicleType + '\n' + 'Destination : ' + vehiclesItem.vehicle.relations[vehiclesItem.vehicle.relations.length - 1].destination + '\n' + 'Départ : ' + vehiclesItem.vehicle.departureExpectedTime + '\n' + 'Transporteur : ' + vehiclesItem.vehicle.haulier + '\n' + 'Capacité : ' + vehiclesItem.vehicle.vehicleCapacity,
            buttons: ['Ok', 'exit']
        });
        alert.present();
    }

    removeItem() {
        console.log('remove item');
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad RelationPage');
    }

    openModal() {
        const mymodal = this.modal.create('ModalPage');

        mymodal.present();
    }

    itemSelected(vehiclesItem: VehiclesItem, relationsItem: RelationsItem) {
        this.navCtrl.push(PairingPage, {
            vehiclesItem: vehiclesItem, relationsItem: relationsItem
        });
    }
}
