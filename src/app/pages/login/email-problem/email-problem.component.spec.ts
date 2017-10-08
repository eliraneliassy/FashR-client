import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailProblemComponent } from './email-problem.component';

describe('EmailProblemComponent', () => {
  let component: EmailProblemComponent;
  let fixture: ComponentFixture<EmailProblemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailProblemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
