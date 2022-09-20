import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
import { authCodeFlowConfig } from './config/sso.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sso-app';

  constructor(private oauthService: OAuthService){
    this.configureSingleSignOn()
  }

  configureSingleSignOn(){
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler()
    this.oauthService.loadDiscoveryDocumentAndTryLogin() 
  }

  login(){
    return this.oauthService.initImplicitFlow()
  }

  logout(){
    return this.oauthService.logOut()
  }

  get token(){
    let claims: any = this.oauthService.getIdentityClaims();
    return claims ? claims : null
  }
}
