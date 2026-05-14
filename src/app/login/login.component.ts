import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

 form:any = {
    data:{}
  }
  
  SignIn(){

    console.log("loginId: " + this.form.data.loginId );
    console.log("password: " + this.form.data.password );

  }

}
