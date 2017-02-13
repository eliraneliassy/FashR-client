import { AuthService } from './services/auth-service.service';
import { Component } from '@angular/core';


@Component({
  selector: 'fashR-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(private authService : AuthService) {
    
  }
  
}