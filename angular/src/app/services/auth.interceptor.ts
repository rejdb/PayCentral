
import {retry} from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from 'rxjs';



@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // console.log('Hi Im an Interceptor');

        let Auth_Token = localStorage.getItem('token');

        if(Auth_Token) {
            let newAuth = req.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + Auth_Token
                    // 'Content-Type':'application/json' 
                }
            });

            return next.handle(newAuth).pipe(retry(5));
        }else{
            return next.handle(req).pipe(retry(5));
        }
    }
}