import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  
  title = 'loginPage';

  loadingornot:boolean=false;

  constructor(private routereve: Router){}

  users = [{name:'varathan',age:20,gender:'m',city:'chennai'},{name:'arjun',age:21,gender:'m',city:'erode'}
           ,{name:'raju',age:22,gender:'m',city:'erode'},
          {name:'kala',age:22,gender:'f',city:'erode'}];

  // ngOnInit(): void {
  //   this.routereve.events.subscribe((routerEven:Event)=>{
  //      if(routerEven instanceof NavigationStart){
  //       this.loadingornot=true;
  //      }
  //     //  if(routerEven instanceof NavigationEnd){
  //     //   this.loadingornot=false;
  //     //  }

  //     setTimeout(()=>{this.loadingornot=false;},1000);
  //   }
  //   );
  // }
}