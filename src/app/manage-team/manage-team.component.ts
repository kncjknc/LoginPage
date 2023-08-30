import { Component, OnInit } from '@angular/core';
import { UserService } from '../Service/UserService';


@Component({
  selector: 'app-manage-team',
  templateUrl: './manage-team.component.html',
  styleUrls: ['./manage-team.component.css']
})
export class ManageTeamComponent implements OnInit {

   users: any[] = []; 
   constructor(private userService:UserService){}

  ngOnInit(): void {
    
   // console.log(this.users)
    this.userService.getAllUsers().subscribe({
      next: (data:any) => {
           this.users = data;
         },
       error:  (error:any) => {
           console.error('Error fetching users:', error);
         },
     });
  }

  deletemaps(id:number){
    this.userService.deleteMaps(id).subscribe({
      next: () => {
           console.log("deleted")
         },
       error:  (error:any) => {
           console.error('Error fetching users:', error);
         },
     });
  }

}