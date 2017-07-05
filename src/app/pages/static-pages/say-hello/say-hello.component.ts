import { Subject } from 'rxjs';
import { ContactUs } from './../../../models/contactUs';
import { EmailService } from './../../../services/email-service.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives';

@Component({
  selector: 'app-say-hello',
  templateUrl: './say-hello.component.html',
  styleUrls: ['./say-hello.component.scss']
})
export class SayHelloComponent implements OnInit {

  constructor(private emailService: EmailService) { }

  ngOnInit() {
  }

  obSubmit(form: NgForm){
    let contactUs : ContactUs =
    {
      firstName : form.value.firstName,
      lastName: form.value.lastName,
      email : form.value.email,
      message : form.value.msg,
      subject : form.value.Subject

    }
    
    this.emailService.sendContactUsEMail(contactUs)
    .toPromise()
    .then((res)=>{})
    .catch((err)=>{console.log(err)});

  }

}
