import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  get token(): string {
    return localStorage.getItem('token');
  }

  set token(value: string) {
    localStorage.setItem('token', value);
    const helper = new JwtHelperService();
    this.decodedToken = helper.decodeToken(value);
  }

  decodedToken: { name: string, isAdmin: boolean, id: string };

  constructor(private http: HttpClient, private router: Router) {
    const helper = new JwtHelperService();
    this.decodedToken = helper.decodeToken(this.token);
  }

  login(formData) {
    return this.http.post(`${environment.apiUrl}/auth/login`, formData)
      .pipe(map((val: any) => {
        this.token = val.token;
      }));
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/auth']);
  }
}
