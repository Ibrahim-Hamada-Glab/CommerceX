import { Injectable } from '@angular/core';
import { LoginRequest } from '../../../shared/model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {





   Login(LoginRequest:LoginRequest) : Observable<any> {

    return of({ success: true, message: 'Login successful' });
  }
  
}
