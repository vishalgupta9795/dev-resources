import { Component } from '@angular/core';
import { Enverment } from '../../../envarment/enverment';
import { EnumMasterAuthTypeId } from '../../Enums/EnumMasterAuthTypeId';
import { AuthService } from '../../Services/auth.service';
import { EnumMasterActionMethodId } from '../../Enums/MaterActionMethodId';
import { ApiService } from '../../Services/api.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  EnumAuthTypeId: typeof EnumMasterAuthTypeId = EnumMasterAuthTypeId;

  constructor(private authService: AuthService, private apiServ: ApiService) { }

  async OnGoogleAuth(authTypeId: EnumMasterAuthTypeId) {
    let result: any = await this.GetProviderCredentialToken();
    let GoogleDetails: any = {};
    if (result.length > 0) {
      GoogleDetails = result[0];
    }
debugger;
    const width = 500;
    const height = 600;
    const left = (window.screen.width - width) / 2;
    const top = (window.screen.height - height) / 2;
    const Feature = `width=${width},height=${height},left=${left},top=${top}`;
    const GoogleAuthUrl = `${GoogleDetails.AuthURrl}?client_id=${GoogleDetails.ClientId}&redirect_uri=${GoogleDetails.RedirectUrl}&response_type=code&scope=email%20profile%20openid&access_type=offline`;
    const popup = window.open(GoogleAuthUrl, '_blank', Feature);

    if (!popup) {
      alert('Popup blocked by browser');
      return;
    }

    popup.focus();

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

 
}
