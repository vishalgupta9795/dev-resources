import { Injectable } from '@angular/core';
import { EnumMasterAuthTypeId } from '../Enums/EnumMasterAuthTypeId';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor() { }

  GetProviderCredentialTokenUrl(masterAuthTypeId:number,materActionMethodId:number){
    return `Auth/GetProviderCredentialToken?masterAuthTypeId=${masterAuthTypeId}&materActionMethodId=${materActionMethodId}`;
  }
   SaveOAuthTokenUrl(Google: EnumMasterAuthTypeId) {
   return `Auth/SaveGoogleAuth?MaterAuthTypeId=${Google}`;
  }
}
