import { Platform } from 'ionic-angular';
import { Travel } from './model/Travel';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Tools } from '../../tools/Tools';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { HttpClient } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError } from 'rxjs/operators';
@Injectable()
export class RelationsService {
    constructor(public http: HttpClient, private platform: Platform) {
    }
    listRelations(startTime: string, endTime: string): Observable<Travel> {
        var urlrelations: string = '/servicesjson/relations-atlas/v1/' + '?depot=' + 'A37580' + '&queryStartTime=' + startTime + '&queryEndTime=' + endTime;
        if(this.platform.is('android')){
            urlrelations='http://ws-a13-sdev.apps.paas.dev.net-courrier.extra.laposte.fr'+urlrelations;
        }
        /*if (this.platform.is('android')) {
            urlrelations = 'http://192.168.1.93:9000' + urlrelations;
        }*/
        return this.http.get<Travel>(urlrelations, Tools.httpOptionsAtlasQuais);
    }

}