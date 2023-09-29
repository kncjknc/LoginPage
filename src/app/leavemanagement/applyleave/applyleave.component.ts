import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/Service/UserService';

@Injectable()
@Component({
  selector: 'app-applyleave',
  templateUrl: './applyleave.component.html',
  styleUrls: ['./applyleave.component.css']
})
export class ApplyleaveComponent implements OnInit {

  constructor( private service: UserService, private modalService: NgbModal) { }

  note: any = [`The leave balance shown takes your future approved leaves into account as well.
  Each Employee is eligible to have 5 leaves per quarter - 3 Earned leaves and 2 Sick/Emergency leaves.
  1 Earned leave will be added on 1st of every month and 2 Emergency/Sick leaves will be added on 1st of January, April, July, October as per the policy.`];

  ngOnInit(): void {
    // Get the list items
    const menuItems = document.querySelectorAll<HTMLLIElement>("#menuClass li");

    menuItems.forEach((item: HTMLLIElement) => {
      item.addEventListener("click", function () {
        menuItems.forEach((menuItem: HTMLLIElement) => {
          menuItem.querySelector<HTMLAnchorElement>("a")!.style.color = "";
        });

        this.querySelector<HTMLAnchorElement>("a")!.style.color = "blue";
      });
    });

    this.service.getLeaves().subscribe(data => {
      console.log(data, "uytf");
      this.Leaves.data.results = data.data.results;
      console.log(this.Leaves);
    });

    this.service.gettoLeaves().subscribe(data =>{
      this.topLeave.data.results=data.data.leave;
    });

  }

  Leaves: { data: { results: any[] } } = { data: { results: [] } };
  topLeave: { data: { results: any[] } } = { data: { results: [] } };
  
  searchText='';

  isModalOpen = false;

  submit(){
    for(const top of this.topLeave.data.results){
      console.log(top.leaveType);
    }
  }
  

  selectedLeave:any={};

  closeResult: string = '';

  openModal(content2: any,leave: any,leaveId:number) {
  
  this.service.getLeaveDetails(leaveId).subscribe(data=>{this.selectedLeave=data.data});
    this.modalService.open(content2, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  closeModal() {
    this.isModalOpen = false;
  }

  pending=false;

  conso(name:any){
    console.log(name);
  }
  
  
   

  


}


