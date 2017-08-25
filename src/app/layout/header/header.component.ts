import { isNullOrUndefined } from 'util';
import { HomeComponent } from './../../pages/home/home.component';
import { SuggestionsService } from './../../services/suggestions-service.service';
import { UserManagerService } from './../../services/user-manager-service.service';
import { Http, Headers } from '@angular/http';
import { Observable, Subject } from 'rxjs';
import { LoginComponent } from './../../pages/login/login/login.component';
import { AuthService } from './../../services/auth-service.service';
import { Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

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
  suggestions: any = {
    'userSuggestions' : [],
    'itemSuggestions' : []
  };

  @ViewChild('searchBox') searchBox : ElementRef;


  constructor(private auth: AuthService,
    private router: Router,
    private http: Http,
    private userService: UserManagerService,
    private suggestionsService: SuggestionsService,
  private renderer: Renderer2
) {

      this.router.events.subscribe((evt)=>{
        if (!(evt instanceof NavigationEnd)) {
            this.cleanSuggestions();
        }
      })

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
          this.cleanSuggestions();
          return;
        }
        this.suggestionsService.getSuggestions(searchTextValue)
          .subscribe((res) => {
            this.cleanSuggestions();
            if (res) {
              res.users.forEach(element => {
                if (isNullOrUndefined(element.displayName)) {
                element.displayName =
                  element.firstName + " " + element.lastName;
              }
                this.suggestions.usersSuggestions.push(
                  { 'displayName': element.displayName , 'imageUrl': element.imageUrl, 'uid': element.userName }
                )
              });
              res.items.forEach(element => {
                this.suggestions.itemSuggestions.push(element);
              });
            }
          })
      });
  }


  logout() {
    this.auth.logout()
      .then(() => {
        this.isAuth = false;
      }

      );

  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  search(term: string,event): void {
    event.preventDefault();
    this.searchTerms.next(term);
  }

  userSelect(user) {
    this.router.navigate(['/users/' + user.uid]);
    this.cleanSuggestions();

  }

  productSelect(product){
    this.router.navigate(['/users/' + product.user.uid])
    this.cleanSuggestions();
  }

  cleanSuggestions(){
    this.suggestions.usersSuggestions = [];
    this.suggestions.itemSuggestions = [];
    this.renderer.setValue(this.searchBox,null);
  }

  

}
