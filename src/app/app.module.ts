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
import { NgbActiveModal, NgbModal, NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {UserFind} from './pipes/UserFind.pipe';
import { SearchPipe } from './search.pipe';
import { LeavemanagementComponent } from './leavemanagement/leavemanagement.component';

const routes: Routes = [
  {path:'',component:LoginPagComponent},
  {path:'forgetPassword',component:ForgetPasswordComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginPagComponent,
    ForgetPasswordComponent,
    ManageTeamComponent,
    UserFind,
    SearchPipe,
    LeavemanagementComponent 
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgbModule,
    NgbModalModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
