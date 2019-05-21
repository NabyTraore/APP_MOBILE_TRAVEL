
import { VehiclesItem } from './../../services/relations/model/VehiclesItem';
import { Component, NgZone } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { RelationsItem } from "../../services/relations/model/RelationsItem";
import { ContentItem } from '../../services/FD/model/ContentItem';
import { MagisterCab } from '../../tools/MagisterCab';

declare var EB;

/**
 * Generated class for the PairingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pairing',
  templateUrl: 'pairing.html',
})
export class PairingPage {
  vehiclesItem: VehiclesItem;
  relationsItem: RelationsItem;
  destinationOrigin: string;
  contentItemList: ContentItem[] = [];
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private readonly zone: NgZone,
  ) {
    this.vehiclesItem = this.navParams.get('vehiclesItem');
    this.relationsItem = this.navParams.get('relationsItem');
    this.destinationOrigin = this.relationsItem.origin;
    if (this.vehiclesItem.vehicle.arrivalOrDeparture === '1') {
      this.destinationOrigin = this.relationsItem.destination;
    }
    if (!this.relationsItem.contentItemList) {
      this.relationsItem.contentItemList = [];
    }
    this.contentItemList = this.relationsItem.contentItemList;
    // this.flash(this.vehiclesItem);

  }


  showAlert(vehiclesItem: VehiclesItem) {
    const alert = this.alertCtrl.create({
      title: 'Detail des Mouvements',
      subTitle: 'N541',
      buttons: ['Ok', 'exit']

    });
    alert.present();
  }

  removeItem(id) {
    console.log("remove item");
  }

  flash(vehiclesItem: VehiclesItem) {
    //EB.Barcode.aimType = EB.Barcode.AIMTYPE_CONTINUOUS_READ;
    EB.Barcode.aimMode = EB.Barcode.AIMMODE_RETICLE;
    EB.Barcode.differentSymbolTimeout = 0;
    EB.Barcode.sameSymbolTimeout = 0;
    var i = 1;
    EB.Barcode.enable({ allDecoders: true, decodeVolume: 0, beamWidth: EB.Barcode.BEAM_WIDE }, (function (hash) {
      console.log(hash, true);
      this.zone.run(() => {
        this.onBarCode(hash.data);
        navigator.vibrate(500);
      });
    }).bind(this));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PairingPage');
  }

  onBarCode(barcode: string) {

    var contentItem: ContentItem = new ContentItem();
    contentItem.contentNumber = barcode;
    contentItem.contentCabType = "Magistere";
    contentItem.magisterCab = new MagisterCab(barcode);
    //contentItem.setContentType(contentItem.getCab().getContainerCode());
    contentItem.pairingStatus = "PAQ";

    if (!this.relationsItem.containsContentItem(contentItem)) {
      this.relationsItem.contentItemList.push(contentItem);
    }
    /*      if (!((PairingListAdapter) listView.getAdapter()).geItems().contains(contentItem)) {
            ((PairingListAdapter) listView.getAdapter()).geItems().add(contentItem);
            ((ArrayAdapter) listView.getAdapter()).notifyDataSetChanged();
    
            DepotServiceAsyncTask depotServiceAsyncTask = new DepotServiceAsyncTask(this,
              contentItem.getCab()
                .getRecipientCode());
            depotServiceAsyncTask.execute();
    
            travelServiceDao.callFDWebservice(this, contentItem, relationsItem, vehicule);
          } else {
            Toast.makeText(this, "Already Scanned!", Toast.LENGTH_LONG).show();
          }
          Log.i("PairingN2TruckActivity", "Scanned: " + barcode);*/


  }
  itemDetails(event, item) { }
  delete(item) { }
  ionViewWillLeave() {
    console.log("Looks like I'm about to leave :(");
    EB.Barcode.disable();
  }
}
