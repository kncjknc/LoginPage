import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { UserService } from 'src/app/Service/UserService';

@Component({
  selector: 'app-monthlyleavereport',
  templateUrl: './monthlyleavereport.component.html',
  styleUrls: ['./monthlyleavereport.component.css']
})
export class MonthlyleavereportComponent implements OnInit {

  constructor(private service: UserService) { }

  monlyLeaveReport: { data: { results: any[] } } = { data: { results: [] } };

  ngOnInit(): void {

    this.service.getMonthlyLeave().subscribe(data => {
      console.log(data, "uytf");
      // Assuming the data structure matches the Holiday interface
      this.monlyLeaveReport.data.results = data.data.results;
      console.log(this.monlyLeaveReport);
    });

    

  }

  months = [{id:1, month: 'Januray' }, {id:2, month: 'Febraury' }, {id:3, month: 'March' }, {id:4, month: 'April' }
  , {id:5, month: 'May' }, {id:6, month: 'Jun' }, {id:7, month: 'July' }, {id:8, month: 'September' }];

  years = [{year:2021}, {year:2022},{year:2023}];

  selectedmonth={id:''};

  selectedyear ={year:0};

  filterMonthYear(){
    console.log(this.selectedmonth.id);
    console.log(this.selectedyear.year);
    this.service.filterMonthYear(this.selectedmonth.id,this.selectedyear.year).subscribe(data=>{
      this.monlyLeaveReport.data.results = data.data.results;
      console.log(this.monlyLeaveReport.data.results);
    })
  }

  searchText='';

//   selectedDate: Date | null=null;
//   formattedDate: string | null=null;

//   // Event handler for date changes
//   onDateChange(event: MatDatepickerInputEvent<Date>) {
//     this.selectedDate = event.value;
//     this.formatDate();
//   }
//  // selectedMonth:string='';

//   // Function to format the date as "Month Year"
//   formatDate() {
//     if (this.selectedDate) {
//       const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' };
//      //const  selectedMonth= Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' };
//       this.formattedDate = this.selectedDate.toLocaleDateString(undefined, options);
//     } else {
//       this.formattedDate = null;
//     }
//   }

}
