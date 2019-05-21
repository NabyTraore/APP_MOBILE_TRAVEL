import * as moment from "moment";
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';


export class Tools {
  static httpOptionsAtlasQuais = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Basic " + btoa("ATLASQUAIS:ATLASQUAIS")
    })
  };


  //6heures avant pour l instant
  static fillStartDate(): string {
    moment.locale('fr');

    var now: Date = new Date();
    now.setHours(now.getHours() - 6);
    var startTime = now.toISOString();

    return startTime.toString();
  }
  static fillEndDate(): string {
    moment.locale('fr');
    var endTime = new Date().toISOString();
    return endTime.toString();
  }
}
