import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollParticipationComponent } from './poll-detail.component';

describe('PollParticipationComponent', () => {
  let component: PollParticipationComponent;
  let fixture: ComponentFixture<PollParticipationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollParticipationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollParticipationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
