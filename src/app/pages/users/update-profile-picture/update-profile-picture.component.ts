import { UserManagerService } from '../../../services/user-manager-service.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { MdDialogRef } from "@angular/material";

@Component({
  selector: 'app-update-profile-picture',
  templateUrl: './update-profile-picture.component.html',
  styleUrls: ['./update-profile-picture.component.scss']
})
export class UpdateProfilePictureComponent implements OnInit {

  constructor(private sanitzer: DomSanitizer,
    private userManager: UserManagerService,
    public dialogRef: MdDialogRef<UpdateProfilePictureComponent>) { }

  userName: string;

  demoUrl: SafeUrl = "";
  fileData: File = null;

  ngOnInit() {
    console.log(this.userName);
  }

  urlChanged(event) {
    this.demoUrl = this.sanitzer.bypassSecurityTrustResourceUrl(event);
  }

  submit(f: NgForm) {
    let formData: FormData = new FormData();
    if (this.fileData != null) {
      formData.append('file', this.fileData, this.fileData.name);
    }
    formData.append('userName', this.userName);
    formData.append('imageUrl', f.value.url);



    this.userManager.updateProfilePicture(formData)
      .subscribe((res) => {
        debugger
        let returnObj = {
          "demoUrl": this.demoUrl,
          "s3Url": res.json()
        }
        this.dialogRef.close(returnObj);
      })



  }

  fileChange(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      this.fileData = file;
    }
    console.log(this.fileData);

  }

}
