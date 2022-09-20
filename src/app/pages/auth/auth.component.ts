import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private oauthService: OAuthService) { }

  ngOnInit(): void {
    console.log(this.token)
  }

  
  get token(){
    let claims: any = this.oauthService.getIdentityClaims();
    return claims ? claims : null
  }
}
