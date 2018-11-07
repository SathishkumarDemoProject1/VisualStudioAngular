import { Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable ,throwError } from 'rxjs';
 import { catchError } from 'rxjs/operators';
interface Employee {
  id:number
  name:string
}

@Injectable({
  providedIn: 'root'
})

export class SeviceService {
  constructor(private http : HttpClient){}
getEmloyee():Observable<Employee[]>{
  return this.http.get<Employee[]>("/assets/data/data.json").pipe(catchError(this.errorHandler))
}

errorHandler(error: HttpErrorResponse){
return throwError(error.message||"server error")
}

}
