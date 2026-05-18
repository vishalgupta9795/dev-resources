import { Component, OnInit } from '@angular/core';
import { Enverment } from '../../../envarment/enverment';
import { Auth3rdPartyService } from '../../Services/auth3rd-party.service';
import { ApiService } from '../../Services/api.service';
import { AuthService } from '../../Services/auth.service';
import { EnumMasterAuthTypeId } from '../../Enums/EnumMasterAuthTypeId';
import { EnumMasterActionMethodId } from '../../Enums/MaterActionMethodId';
import { OAuthToken } from '../../Model/oauth-token';

@Component({
  selector: 'app-googe-login',
  imports: [],
  templateUrl: './googe-login.component.html',
  styleUrl: './googe-login.component.css'
})
export class GoogeLoginComponent implements OnInit {
  AuthCode: string | null = null;
  Authiss: string | null = null;
  AuthScope: string | null = null
  OAuthToken:OAuthToken = new OAuthToken();

  constructor(private authServ: Auth3rdPartyService, private apiServ: ApiService, private authService: AuthService) { }

  async ngOnInit(): Promise<void> {
    const urlParams = new URLSearchParams(window.location.search);
    this.AuthCode = urlParams.get('code');
    this.Authiss = urlParams.get('iss');
    this.AuthScope = urlParams.get('scope');
    if (this.AuthCode) {
      let result: any = await this.GetProviderCredentialToken();
      let GoogleDetails: any = {};
      if (result.length > 0) {
        GoogleDetails = result[0];
      }

      this.GetGoogleAccessToken(this.AuthCode,GoogleDetails);

    }
  }
  GetGoogleAccessToken(AuthCode: string, GoogleDetails: any) {
    let param: any = {
      code: AuthCode,
      client_id: GoogleDetails.ClientId,
      client_secret: GoogleDetails.ClientSecret,
      redirect_uri: GoogleDetails.RedirectUrl,
      grant_type: 'authorization_code'
    };
    this.authServ.GetGoogleAccessToken(GoogleDetails.TokenUrl, param).subscribe((res: any) => {
      console.log(res);
      debugger;
      this.OAuthToken.accessToken = res.access_token;
      this.OAuthToken.expireInDt = new Date(new Date().getTime() + res.expires_in * 1000);
      this.OAuthToken.refershToken = res.refresh_token;
      this.OAuthToken.scope = res.scope;
      this.OAuthToken.tokenType = res.token_type;
      this.OAuthToken.materAuthTypeId = EnumMasterAuthTypeId.Google;
      this.SaveToken();
    });
  }

  async GetProviderCredentialToken() {
    return await new Promise((resolve, reject) => {
      let ApiUrl = this.authService.GetProviderCredentialTokenUrl(EnumMasterAuthTypeId.Google, EnumMasterActionMethodId.Get_Credential);
      this.apiServ.Get(ApiUrl).subscribe((Res: any) => {
        console.log(Res);
        resolve(Res);
      });
    });
  }

 SaveToken(){
    let ApiUrl = this.authService.SaveOAuthTokenUrl(EnumMasterAuthTypeId.Google); 
    this.apiServ.Post(ApiUrl, this.OAuthToken).subscribe((Res: any) => {
      window.close();
    })
  }

}


