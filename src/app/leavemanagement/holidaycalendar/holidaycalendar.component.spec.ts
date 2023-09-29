import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidaycalendarComponent } from './holidaycalendar.component';

describe('HolidaycalendarComponent', () => {
  let component: HolidaycalendarComponent;
  let fixture: ComponentFixture<HolidaycalendarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HolidaycalendarComponent]
    });
    fixture = TestBed.createComponent(HolidaycalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
