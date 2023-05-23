import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginUrl = "http://localhost:5000/api/users/login";
  private getAllUser = "http://localhost:5000/api/contacts";

  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.httpClient.post(this.loginUrl, { email, password });
  }

  get() {
    return this.httpClient.get(this.getAllUser);
  }

  getToken() {
    return localStorage.getItem('Authorization')
    
    
    // localStorage.setItem('user', )
  }
}
