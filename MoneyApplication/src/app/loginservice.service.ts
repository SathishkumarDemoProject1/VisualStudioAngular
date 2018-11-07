import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { throwError, Observable } from 'rxjs'
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

constructor(private httpClient:HttpClient) { }
checkUserCrediential(loginValue){
  // let headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
  console.log(loginValue)
  const params = new HttpParams().set('loginValue', JSON.stringify(loginValue));
    return this.httpClient.get<Observable<string>>("http://localhost:5000/checkUserCrediential",{responseType:"json",params}).pipe(catchError(this.errorHandler))
}
errorHandler(error: HttpErrorResponse){
      return throwError(error.message||"server error")
      }
}
