import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {LocalStorageService} from "../local-storage.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router) { }
  onSubmit(user: string, pass: string){
    let loggedIn = pass == "us" && user == "among";
    if(loggedIn){
      //TODO: get token from backend
      let token = "AmongUs123LOL";
      new LocalStorageService().set("token",token);
      this.router.navigate(['/'])
    }
  }
}

