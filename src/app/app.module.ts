import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginPagComponent } from './login-pag/login-pag.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { RouterModule, Routes } from '@angular/router';
import { ManageTeamComponent } from './manage-team/manage-team.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './Service/UserService';

const routes: Routes = [
  {path:'',component:LoginPagComponent},
  {path:'forgetPassword',component:ForgetPasswordComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginPagComponent,
    ForgetPasswordComponent,
    ManageTeamComponent
   
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
