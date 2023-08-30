
import { HttpClient } from '@angular/common/http';

import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable({providedIn:'root'})
export class UserService{

  id:number=0;

  constructor(private http:HttpClient) {}

  private baseUrl ='http://localhost:9090';

  getAllUsers(): Observable<any> {
      return this.http.get(`${this.baseUrl}/getAll`);
    }

    deleteMaps(ids:number): Observable<any>{
      this.id=ids;
      console.log(this.id);
      console.log(this.baseUrl+'/delete/'+this.id);
     return this.http.delete(this.baseUrl+'/delete/'+this.id);
    }
   
}
