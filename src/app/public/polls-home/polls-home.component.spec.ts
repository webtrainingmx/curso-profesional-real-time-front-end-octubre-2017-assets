import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollsHomeComponent } from './polls-home.component';

describe('PollsHomeComponent', () => {
  let component: PollsHomeComponent;
  let fixture: ComponentFixture<PollsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
