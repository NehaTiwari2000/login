import { LoginService } from "./login.service";
import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let loginService = this.injector.get(LoginService);
    let tokenReq = request.clone({
      setHeaders: {
        Authorization: `Bearer ${loginService.getToken()}`
      }
    })
    return next.handle(tokenReq);
  }
}
