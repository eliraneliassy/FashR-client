import { element } from 'protractor';
import { SuggestionsService } from './../../services/suggestions-service.service';
import { UserManagerService } from './../../services/user-manager-service.service';
import { Http, Headers } from '@angular/http';
import { Observable, Subject } from 'rxjs';
import { LoginComponent } from './../../pages/login/login/login.component';
import { AuthService } from './../../services/auth-service.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'fash-r-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  isLogedIn : Observable<boolean>;
  firebase_user : any;
  user:any;

  private searchTerms = new Subject<string>();  
  usersSuggestions :any[] = [];
  

  constructor(private auth:AuthService, 
              private router : Router,
              private http: Http,
              private userService: UserManagerService,
              private suggestionsService : SuggestionsService) {

    this.isLogedIn = this.auth.isLoggedIn();
    this.auth.getUser().subscribe((res)=> {
      this.firebase_user = res;


      this.user = userService.getCurrentUser(this.firebase_user.uid);
    });
    
  } 

  ngOnInit() {
    this.searchTerms.debounceTime(500).
    distinctUntilChanged()
    .subscribe(searchTextValue => {
      debugger
      this.suggestionsService.getSuggestions(searchTextValue)
      .subscribe((res) => {
        debugger
        if(res){
            res.forEach(element => {
              debugger
              this.usersSuggestions.push(
                {'name':element.firstName + " " + element.lastName, 'imageUrl': element.imageUrl}
              )
            });
          }
      })
  });
}
    // this.usersSuggestions = this.searchTerms
    //  .debounceTime(300)
    //  .distinctUntilChanged()
    //  .switchMap(term => 
    //  term ? this.suggestionsService.getSuggestions(term)
    //  : Observable.of<any[]>([]))
    //  .catch(error => {
    //     // TODO: add real error handling
    //     console.log(error);
    //     return Observable.of<any[]>([]);
    //   });
      
  // }

  logout(){
    this.auth.logout();
    
  }

  goToLogin(){
    this.router.navigate(['/login']);
  }

  search(term: string) : void  {
    this.searchTerms.next(term);
  } 

select(item){
   
}

}
