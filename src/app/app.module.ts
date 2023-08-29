import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginPagComponent } from './login-pag/login-pag.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:LoginPagComponent},
  {path:'forgetPassword',component:ForgetPasswordComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginPagComponent,
    ForgetPasswordComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {enableTracing:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
