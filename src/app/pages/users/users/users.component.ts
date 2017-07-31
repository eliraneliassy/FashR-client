import { AppService } from './../../../services/app-service.service';
import { AuthService } from './../../../services/auth-service.service';
import { Subscription } from 'rxjs/Rx';
import { UserManagerService } from './../../../services/user-manager-service.service';
import { Component, OnInit, OnDestroy } from '@angular/core';


export interface ICounts{
    countItems : number,
    countUsers : number
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})


export class UsersComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  mock:any = [{"userDeatiles":{"userName":"2SarfRN3Geh5rPRNXdjH3ym5FCu1","updateTime":0,"firstName":"Matan","lastName":"Evrany","displayName":null,"linkedAccounts":null,"userEmail":"mevrany@gmail.com","mailboxes":null,"href":null,"createTime":0,"lastScanTime":1496669331593,"zipCode":-1,"imageUrl":"https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/12108297_10156149993640088_6462030065644528290_n.jpg?oh=b411718a4818c6a2a4b3710883ce8141&oe=59D47E21","countFollowing":0,"providerId":-1},"countFollowers":1,"countFollowing":0,"countItems":476,"moneySpent":1692427,"isFollowed":true},{"userDeatiles":{"userName":"2SarfRN3Geh5rPRNXdjH3ym5FCu1","updateTime":0,"firstName":"Matan","lastName":"Evrany","displayName":null,"linkedAccounts":null,"userEmail":"mevrany@gmail.com","mailboxes":null,"href":null,"createTime":0,"lastScanTime":1496669331593,"zipCode":-1,"imageUrl":"https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/12108297_10156149993640088_6462030065644528290_n.jpg?oh=b411718a4818c6a2a4b3710883ce8141&oe=59D47E21","countFollowing":0,"providerId":-1},"countFollowers":1,"countFollowing":0,"countItems":476,"moneySpent":1692427,"isFollowed":true},{"userDeatiles":{"userName":"2SarfRN3Geh5rPRNXdjH3ym5FCu1","updateTime":0,"firstName":"Matan","lastName":"Evrany","displayName":null,"linkedAccounts":null,"userEmail":"mevrany@gmail.com","mailboxes":null,"href":null,"createTime":0,"lastScanTime":1496669331593,"zipCode":-1,"imageUrl":"https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/12108297_10156149993640088_6462030065644528290_n.jpg?oh=b411718a4818c6a2a4b3710883ce8141&oe=59D47E21","countFollowing":0,"providerId":-1},"countFollowers":1,"countFollowing":0,"countItems":476,"moneySpent":1692427,"isFollowed":true},{"userDeatiles":{"userName":"2SarfRN3Geh5rPRNXdjH3ym5FCu1","updateTime":0,"firstName":"Matan","lastName":"Evrany","displayName":null,"linkedAccounts":null,"userEmail":"mevrany@gmail.com","mailboxes":null,"href":null,"createTime":0,"lastScanTime":1496669331593,"zipCode":-1,"imageUrl":"https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/12108297_10156149993640088_6462030065644528290_n.jpg?oh=b411718a4818c6a2a4b3710883ce8141&oe=59D47E21","countFollowing":0,"providerId":-1},"countFollowers":1,"countFollowing":0,"countItems":476,"moneySpent":1692427,"isFollowed":true},{"userDeatiles":{"userName":"2SarfRN3Geh5rPRNXdjH3ym5FCu1","updateTime":0,"firstName":"Matan","lastName":"Evrany","displayName":null,"linkedAccounts":null,"userEmail":"mevrany@gmail.com","mailboxes":null,"href":null,"createTime":0,"lastScanTime":1496669331593,"zipCode":-1,"imageUrl":"https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/12108297_10156149993640088_6462030065644528290_n.jpg?oh=b411718a4818c6a2a4b3710883ce8141&oe=59D47E21","countFollowing":0,"providerId":-1},"countFollowers":1,"countFollowing":0,"countItems":476,"moneySpent":1692427,"isFollowed":true},{"userDeatiles":{"userName":"2SarfRN3Geh5rPRNXdjH3ym5FCu1","updateTime":0,"firstName":"Matan","lastName":"Evrany","displayName":null,"linkedAccounts":null,"userEmail":"mevrany@gmail.com","mailboxes":null,"href":null,"createTime":0,"lastScanTime":1496669331593,"zipCode":-1,"imageUrl":"https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/12108297_10156149993640088_6462030065644528290_n.jpg?oh=b411718a4818c6a2a4b3710883ce8141&oe=59D47E21","countFollowing":0,"providerId":-1},"countFollowers":1,"countFollowing":0,"countItems":476,"moneySpent":1692427,"isFollowed":true},{"userDeatiles":{"userName":"ntisEfaYbrQ7kQ4nu5AFg23RJKY2","updateTime":0,"firstName":"Eliran","lastName":"Eliassy","displayName":null,"linkedAccounts":null,"userEmail":"eliran.eliassy@gmail.com","mailboxes":null,"href":null,"createTime":0,"lastScanTime":-1,"zipCode":-1,"imageUrl":"http://www.expogeorgia.ge/wp-content/uploads/2015/09/anonymous-user.png","countFollowing":0,"providerId":-1},"countFollowers":0,"countFollowing":0,"countItems":0,"moneySpent":0,"isFollowed":false}];
  users: any = [];
  sub: Subscription;

  private counts : ICounts = {
    countItems : 0,
    countUsers : 0
  };

  
  constructor(
    private userM: UserManagerService,
    private authService: AuthService,
    private appService: AppService
  ) {

   }

  ngOnInit() {
    this.authService.getUser().subscribe((res) => {
      if (res.uid != undefined) {
        this.sub = this.userM.getAllUsersProfile(res.uid)
          .subscribe((res) => {
            this.users = res;
          })
      }

    })

    this.appService.countItemsAndUsers()
    .subscribe((res : ICounts)=>{
      this.counts = res;
    })

    

  }

}
