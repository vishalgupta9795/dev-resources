import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class Auth3rdPartyService {

  constructor(private apiServ: ApiService) { }

  GetGoogleAccessToken(TokenUrl :string , param : any){
    return this.apiServ.Post(TokenUrl, param);
  }
}
