import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
    public _isLoggedIn: boolean;
    IsLogged(): boolean {
        return this._isLoggedIn;
    }

    SetLogin(isLoggedIn: boolean) {
        this._isLoggedIn = isLoggedIn;
    }
}