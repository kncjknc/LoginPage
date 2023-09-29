
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
 
  
  id: number = 0;

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:9090';

  getAllUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getAll`);
  }

  deleteMaps(ids: number): Observable<any> {
    this.id = ids;
    console.log(this.id);
    console.log(this.baseUrl + '/delete/' + this.id);
    return this.http.delete(this.baseUrl + '/delete/' + this.id);
  }

  updateUser(ids: number, editedUser: any): Observable<any> {
    this.id = ids;
    return this.http.put(this.baseUrl + "/updateUser/" + this.id, editedUser);
  }

  addUser(newUser: any): Observable<any> {
    return this.http.post(this.baseUrl + "/addEmp", newUser, { headers: { "token": "sdfsdfsdf"}});
  }

   header = new HttpHeaders({
    'Token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbXBJZCI6MTAxNiwiaWF0IjoxNjk1NjUxMzE1LCJleHAiOjE2OTU2NTQ5MTV9.xT-8MqzAY0qO_H6esdQqpbkjtSn58zYpYdruSJyIgIY',
    'Accept': 'application/json' // Specify the media type you can accept
  });

  getLeaves(): Observable<any>{
    
   return this.http.get("http://doodlebluelive.com:2099/api/v1/employee/listAppliedLeaves?page=1&limit=10",{headers:this.header})
  }

  getMonthlyLeave(): Observable<any>{

    return this.http.get("http://doodlebluelive.com:2099/api/v1/employee/monthlyLeaveReport?limit=30&year=2023&month=9",{headers:this.header});
  }

  getHolidayLeaves():Observable<any>{
  
    return this.http.get("http://doodlebluelive.com:2099/api/v1/employee/getHolidayList?page=1&limit=10",{headers:this.header})
  }

  getTypeofLeaves():Observable<any>{
    return this.http.get("http://doodlebluelive.com:2099/api/v1/employee/getLeaves",{headers:this.header})
  }

  applyLeave(leaveType:number,period:string,project:string,fromDate:Date,toDate:Date,comments:string):Observable<any>{
    console.log(comments);

    const leaveDetails = {"leavePeriod":period
    ,"leaveTypeId":leaveType,
    "fromDate":fromDate,
    "toDate":toDate,
    "comments":'Fever',
    "projectsList":["DU_482_ | "+project],
    "projectsListIds":[1456]};
   return this.http.post("http://doodlebluelive.com:2099/api/v1/employee/applyLeave",leaveDetails,{headers:this.header})
  }

  applyCompOff(toDate: Date, taskHour: number, namee: string, comments: string) {
    throw new Error('Method not implemented.');
  }

  filterMonthYear(month: string, year: number):Observable<any> {
    const base ="http://doodlebluelive.com:2099/api/v1/employee/monthlyLeaveReport";
    const url = `${base}?limit=30&year=${year}&month=${month}`;
   return this.http.get(url,{headers:this.header});
  }

  getLeaveDetails(LeaveId: number):Observable<any> {
    const url = "http://doodlebluelive.com:2099/api/v1/employee/viewLeave?leaveId=";
    const data = `${url}${LeaveId}`;
   return this.http.get(data,{headers:this.header});
  }

  gettoLeaves():Observable<any> {
    return this.http.get("http://doodlebluelive.com:2099/api/v1/employee/getLeaves",{headers:this.header});
  }
 

}