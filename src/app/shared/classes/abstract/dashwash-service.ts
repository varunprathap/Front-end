import {Observable} from 'rxjs';
import {NavbarService} from '../../services/navbar.service';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../services/auth.service';
import {environment} from '../../../../environments/environment';

export abstract class DashwashService {
  public data$: Observable<any>;

  constructor(protected navbarService: NavbarService, protected http: HttpClient,
              protected auth: AuthService, protected entity: string) {
    this.refresh();
  }

  setMenu() {
  }

  private refresh() {
    this.data$ = this.http
      .get<any>(`${environment.apiUrl}/api/${this.auth.decodedToken.id}/${this.entity}`);
  }

  edit(data: any) {
    this.http.put(`${environment.apiUrl}/api/${this.entity}/${data._id}`, data)
      .subscribe(value => {
        this.refresh();
      });
  }

  delete(data: any) {
    this.http.delete(`${environment.apiUrl}/api/${this.entity}/${data._id}`, data)
      .subscribe(value => {
        this.refresh();
      });
  }

  add(editData: any) {
    this.http.post(`${environment.apiUrl}/api/${this.entity}`,
      {userId: this.auth.decodedToken.id, ...editData}, {responseType: 'text'})
      .subscribe(value => {
        this.refresh();
      });
  }
}
