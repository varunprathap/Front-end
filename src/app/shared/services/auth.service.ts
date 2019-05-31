import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {

  }

  login(formData) {
    console.log(formData);

    return this.httpClient.post(`${environment.apiUrl}/auth/login`, formData);

  }
}
