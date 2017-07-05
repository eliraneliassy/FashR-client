import { element } from 'protractor';
import { SuggestionsService } from './../../services/suggestions-service.service';
import { UserManagerService } from './../../services/user-manager-service.service';
import { Http, Headers } from '@angular/http';
import { Observable, Subject } from 'rxjs';
import { LoginComponent } from './../../pages/login/login/login.component';
import { AuthService } from './../../services/auth-service.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'fash-r-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  
  ngOnDestroy(): void {
    this.searchTerms.unsubscribe();
  }

  isAuth: boolean = false;
  firebase_user: any = null;
  user: any;

  private searchTerms = new Subject<string>();
  usersSuggestions: any[] = [];


  constructor(private auth: AuthService,
    private router: Router,
    private http: Http,
    private userService: UserManagerService,
    private suggestionsService: SuggestionsService) {



  }

  ngOnInit() {

    this.auth.user.subscribe(user => {
      if (user != null) {
        this.userService.getUser(user.uid).subscribe((res) => {
          if (res != null) {
            this.firebase_user = res;
            this.isAuth = true;
          }
        });
      }
    });

    this.searchTerms.debounceTime(300)
      .distinctUntilChanged()
      .subscribe(searchTextValue => {
        if (searchTextValue == "") {
          this.usersSuggestions = [];
          return;
        }
        this.suggestionsService.getSuggestions(searchTextValue)
          .subscribe((res) => {
            this.usersSuggestions = [];
            if (res) {
              res.forEach(element => {
                this.usersSuggestions.push(
                  { 'name': element.firstName + " " + element.lastName, 'imageUrl': element.imageUrl, 'uid': element.userName }
                )
              });
            }
          })
      });
  }


  logout() {
    debugger
    this.auth.logout()
      .then(() => {
        this.isAuth = false;
      }

      );

  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  select(user) {
    this.router.navigate(['/users/' + user.uid]);
    this.usersSuggestions = [];

  }

}
