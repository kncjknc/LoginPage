import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Service/UserService';

@Component({
  selector: 'app-holidaycalendar',
  templateUrl: './holidaycalendar.component.html',
  styleUrls: ['./holidaycalendar.component.css']
})
export class HolidaycalendarComponent implements OnInit {

  constructor(private service: UserService) { }

  holidays1: { data: { results: any[] } } = { data: { results: [] } };

  ngOnInit(): void {
    this.service.getHolidayLeaves().subscribe(data => {
      console.log(data, "uytf");
      // Assuming the data structure matches the Holiday interface
      this.holidays1.data.results = data.data.results;
      console.log(this.holidays1);
    });
  }

  searchText='';
}
