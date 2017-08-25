import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailnotsupportedComponent } from './emailnotsupported.component';

describe('EmailnotsupportedComponent', () => {
  let component: EmailnotsupportedComponent;
  let fixture: ComponentFixture<EmailnotsupportedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailnotsupportedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailnotsupportedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
