import { EmailService } from './../../services/email-service.service';
import { FormsModule } from '@angular/forms';
import { staticRouting } from './static.routing';
import { SharedModule } from './../../shared/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SayHelloComponent } from './say-hello/say-hello.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    staticRouting,
    FormsModule
    
  ],
  
  declarations: [SayHelloComponent, AboutUsComponent],
  providers:[EmailService]
})
export class StaticPagesModule { }
