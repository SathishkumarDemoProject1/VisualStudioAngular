import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
interface customer {
  name:string;
  address:string
}
@Injectable({
  providedIn: 'root'
})
export class HomeserviceService {

  constructor(public httpClient : HttpClient) { }

  insert(value){
    console.log(value)
  const params = new HttpParams().set('todo', JSON.stringify({"todo":value}));
    return this.httpClient.post<Observable<string>>("http://localhost:5000/insertToDo",{responseType:"json",params}).pipe(catchError(this.errorHandler))
}
getData(){
    return this.httpClient.get<Observable<customer>>("http://localhost:5000/getToDo").pipe(catchError(this.errorHandler))
}
errorHandler(error: HttpErrorResponse){
      return throwError(error.message||"server error")
      }

  }

