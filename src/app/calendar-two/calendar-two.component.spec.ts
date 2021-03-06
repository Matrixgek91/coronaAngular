import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarTwoComponent } from './calendar-two.component';

describe('CalendarTwoComponent', () => {
  let component: CalendarTwoComponent;
  let fixture: ComponentFixture<CalendarTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
