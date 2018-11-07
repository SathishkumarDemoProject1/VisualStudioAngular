import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  
  constructor(private httpClient:HttpClient) { }

  checkUserEmail(userEmail){
    console.log("hai hai",userEmail)
    return this.httpClient.post<Observable<string>>("http://localhost:5000/checkUserExist",JSON.stringify({email:userEmail}),this.httpOptions).pipe(catchError(this.errorHandler))
  }

  registerNewUser(formDetails){
    console.log(formDetails)
    const params = new HttpParams().set('formDetails', JSON.stringify({"formDetails":formDetails}));
    return this.httpClient.post<Observable<string>>("http://localhost:5000/registerNewUser",JSON.stringify(formDetails),this.httpOptions).pipe(catchError(this.errorHandler))
  }
  errorHandler(error: HttpErrorResponse){
    return throwError(error.message||"server error")
    }
}
