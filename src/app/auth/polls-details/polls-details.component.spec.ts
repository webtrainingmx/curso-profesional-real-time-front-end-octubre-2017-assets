import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollsReportsComponent } from './polls-details.component';

describe('PollsReportsComponent', () => {
  let component: PollsReportsComponent;
  let fixture: ComponentFixture<PollsReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollsReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollsReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
