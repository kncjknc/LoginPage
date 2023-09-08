import { Component, OnInit } from '@angular/core';
import { UserService } from '../Service/UserService';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SearchPipe } from '../search.pipe';

@Component({
  selector: 'app-manage-team',
  templateUrl: './manage-team.component.html',
  styleUrls: ['./manage-team.component.css']
})

export class ManageTeamComponent implements OnInit {


  users: any[] = [];
  editUser: any = {};
  editingUserId: any = {};
  newUser: any = {};
  searchingName: string = '';
  filteredUser:Users[]=[];

  constructor(private userService: UserService, private modalService: NgbModal) { }

  openModal(content: any) {
    this.modalService.open(content, { centered: true });
  }

  ngOnInit(): void {

    this.userService.getAllUsers().subscribe({
      next: (data: any) => {
        this.users = data;
      },
      error: (error: any) => {
        console.error('Error fetching users:', error);
      },
    });
  }

  deletemaps(id: number) {

    const confirMation = window.confirm("Are sure Delete this record ?");

    if (confirMation) {

      this.userService.deleteMaps(id).subscribe({
        next: () => {
          console.log("deleted")
        },
        error: (error: any) => {
          console.error('Error fetching users:', error);
        },
      });

    }
  }

  updateUser(id: number) {
    this.userService.updateUser(id, this.editUser).subscribe(data => this.users = data);
  }

  addUser(newUser: any) {
    //  console.log(newUser.name)
    this.userService.addUser(newUser).subscribe({
      next: () => {
        console.log("deleted")
      },
      error: (error: any) => {
        console.error('Error fetching users:', error);
      },
    });
  }

}