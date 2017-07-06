import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-qna',
  templateUrl: './qna.component.html',
  styleUrls: ['./qna.component.scss']
})
export class QnaComponent implements OnInit {

  @Input() question : string ="";
  @Input() answer : string =""; 

  plus : boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
