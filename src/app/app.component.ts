import { Component } from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {NgOptimizedImage} from "@angular/common";
import {LocalStorageService} from "./local-storage.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, LoginComponent, NgOptimizedImage, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private router: Router) {
    let localStorageService = new LocalStorageService();
    let savedToken : string = localStorageService.get("token") ?? "";
    if(savedToken != "AmongUs123LOL"){
      this.router.navigate(['/login'])
    }
  }
}
