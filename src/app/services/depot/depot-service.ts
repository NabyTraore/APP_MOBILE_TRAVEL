import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Depot } from './model/Depot';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { Tools } from '../../tools/Tools';
import { Platform } from 'ionic-angular';

@Injectable()
export class DepotService {

    constructor(public http: HttpClient, private platform: Platform) {
     }
     listDepot(codeRegate: string): Observable<Depot> {
       var urlDepot: string = '/servicesjson/depots-atlas/v1/' + '?queryDepotListRegate=' + codeRegate;
        if (this.platform.is('android')) {
            urlDepot = 'http://ws-a13-sdev.apps.paas.dev.net-courrier.extra.laposte.fr' + urlDepot;
        }
        /*if(this.platform.is('android')){
            urlDepot='http://192.168.1.93:9000'+urlDepot;
        }*/
        return this.http.get<Depot>(urlDepot, Tools.httpOptionsAtlasQuais);
    }
}