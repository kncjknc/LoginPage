import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginPagComponent } from './login-pag/login-pag.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { RouterModule, Routes } from '@angular/router';
import { ManageTeamComponent } from './manage-team/manage-team.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './Service/UserService';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {  NgbModal, NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {UserFind} from './pipes/UserFind.pipe';
import { SearchPipe } from './search.pipe';
import { LeavemanagementComponent } from './leavemanagement/leavemanagement.component';
import { NgSelectModule } from '@ng-select/ng-select';
import {MatTabsModule} from '@angular/material/tabs';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApplyleaveComponent } from './leavemanagement/applyleave/applyleave.component';
import { ApplycompoffComponent } from './leavemanagement/applycompoff/applycompoff.component';
import { MonthlyleavereportComponent } from './leavemanagement/monthlyleavereport/monthlyleavereport.component';
import { HolidaycalendarComponent } from './leavemanagement/holidaycalendar/holidaycalendar.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchfilterPipe } from './searchfilter.pipe';
import { MobilenumbervalidationComponent } from './mobilenumbervalidation/mobilenumbervalidation.component';
import { NumbervalidationDirective } from './numbervalidation.directive';



const routes: Routes = [
  {path:'',component:LoginPagComponent},
  {path:'forgetPassword',component:ForgetPasswordComponent},
  {path:'applyLeave',component:ApplyleaveComponent},
  {path:'holidays',component:HolidaycalendarComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginPagComponent,
    ForgetPasswordComponent,
    ManageTeamComponent,
    UserFind,
    SearchPipe,
    LeavemanagementComponent,
    ApplyleaveComponent,
    ApplycompoffComponent,
    MonthlyleavereportComponent,
    HolidaycalendarComponent,
    SearchfilterPipe,
    MobilenumbervalidationComponent,
    NumbervalidationDirective 
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgbModule,
    NgbModalModule,  
    MatTabsModule,
    CdkAccordionModule,
    BrowserAnimationsModule,MatFormFieldModule,
    MatInputModule, 
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    
    
    
    

    
  ],
  providers: [UserService,ApplyleaveComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
