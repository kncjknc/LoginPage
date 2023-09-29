import { Component, OnInit } from '@angular/core';
import { ApplyleaveComponent } from './applyleave/applyleave.component';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../Service/UserService';
import { ApplycompoffComponent } from './applycompoff/applycompoff.component';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-leavemanagement',
  templateUrl: './leavemanagement.component.html',
  styleUrls: ['./leavemanagement.component.css'],
})
export class LeavemanagementComponent implements OnInit {

  modalRef:NgbModal|undefined;

  activeTabIndex = 0;

  closeResult: string = '';

  constructor(private service: UserService, private applyleaveComponent: ApplyleaveComponent, private modalService: NgbModal) { }

  note: any = [`The leave balance shown takes your future approved leaves into account as well.
  Each Employee is eligible to have 5 leaves per quarter - 3 Earned leaves and 2 Sick/Emergency leaves.
  1 Earned leave will be added on 1st of every month and 2 Emergency/Sick leaves will be added on 1st of January, April, July, October as per the policy.`];

  leaveHistory = [{ id: 1, LeaveDate: '13/02/23', Type: 'Emergency', Status: 'Auto', ApprovedBy: 'varathan', NotApproved: '-' },
  { id: 2, LeaveDate: '16/04/23', Type: 'Emergency', Status: 'Auto', ApprovedBy: 'varathan', NotApproved: '-' },
  { id: 3, LeaveDate: '23/05/23', Type: 'Sick', Status: 'Auto', ApprovedBy: 'varathan', NotApproved: '-' }];


  displayStyle ='none';


  leaveDetails = { namee: '' };

  ngOnInit(): void {

    const menuItems = document.querySelectorAll<HTMLLIElement>("#menuClass li");

    menuItems.forEach((item: HTMLLIElement) => {
      item.addEventListener("click", function () {
        menuItems.forEach((menuItem: HTMLLIElement) => {
          menuItem.querySelector<HTMLAnchorElement>("a")!.style.color = "";
        });

        this.querySelector<HTMLAnchorElement>("a")!.style.color = "blue";
      });
    });
  }


  leaveType = [{ id: 1, type: 'Emengency' }, { id: 2, type: 'EarnedLeave' }];

  period = [{ day: 'half_day' }, { day: 'full_day' }];

  projects = [{ project: 'Sutherland' }, { project: 'Yatra' }];

  hours = [{ hour: 4 }, { hour: 8 }]

  fromDate: Date = new Date();
  toDate: Date = new Date();

  result = [];
  comments = '';

  leavePeriod = { day: '' };
  leaveId = { id: 0 };
  projectName = { namee: '' };
  taskHours = { taskHour: 0 };


  leaveFormDetail() {
    console.log('comments'+this.comments);
    
    this.service.applyLeave(this.leaveId.id, this.leavePeriod.day, this.projectName.namee, this.fromDate, this.toDate, this.comments).subscribe(data => this.result = data);
    // this.displayStyle = "none";
    this.modalService.dismissAll();
    
    }

  compOffDetails(){
    console.log('hii');
    this.service.applyCompOff(this.toDate,this.taskHours.taskHour,this.projectName.namee,this.comments);
    
    
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
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

  open2(content2: any) {
    this.modalService.open(content2, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
}


