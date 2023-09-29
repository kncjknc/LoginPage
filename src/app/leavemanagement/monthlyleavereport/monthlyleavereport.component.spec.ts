import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyleavereportComponent } from './monthlyleavereport.component';

describe('MonthlyleavereportComponent', () => {
  let component: MonthlyleavereportComponent;
  let fixture: ComponentFixture<MonthlyleavereportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonthlyleavereportComponent]
    });
    fixture = TestBed.createComponent(MonthlyleavereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
