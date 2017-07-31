import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from './services/auth-service.service';
import { Component } from '@angular/core';


@Component({
  selector: 'fashR-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(private authService : AuthService,
  private router: Router) {
    
  
  
  }

  

  ngOnInit() {
    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        //document.body.scrollTop = 0;
        scrollToTop(500)
    });
}


   
}

function scrollToTop(scrollDuration) {
    var scrollStep = -window.scrollY / (scrollDuration / 15),
        scrollInterval = setInterval(function(){
        if ( window.scrollY != 0 ) {
            window.scrollBy( 0, scrollStep );
        }
        else clearInterval(scrollInterval); 
    },15);
}