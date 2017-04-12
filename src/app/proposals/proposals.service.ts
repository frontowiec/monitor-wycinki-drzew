/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
import {Injectable} from "@angular/core";
import {BASE_URL} from "../authentication/config";
import {Observable} from "rxjs";
import {AuthHttp} from "angular2-jwt";
import {tokenNotExpired} from 'angular2-jwt';
import {Http, URLSearchParams} from "@angular/http";


@Injectable()
export class ProposalsService {
  constructor(public authHttp: AuthHttp, public http: Http) {
  }

  getAllProposals$() {
    if (tokenNotExpired()) {
      return this.authHttp.get(`${BASE_URL}/proposals`)
        .map(response => response.json())
        .catch((error: any) => Observable.throw('Server error'))
    }

    return this.http.get(`${BASE_URL}/proposals`)
      .map(response => response.json())
      .catch((error: any) => Observable.throw('Server error'))
  }

  validatePosition$(latitude, longitude) {
    let params: URLSearchParams = new URLSearchParams();
    params.append('latitude', latitude);
    params.append('longitude', longitude);
    return this.http.get(`${BASE_URL}/proposals/gis/validate`, {search: params})
      .map(response => response.json())
      .catch((error: any) => Observable.throw('Server error'));
  }

  saveProposal$(proposal) {
    return this.http.put(`${BASE_URL}/proposals`, {...proposal})
      .map(response => response.json())
      .catch((error: any) => Observable.throw('Server error'))
  }
}
