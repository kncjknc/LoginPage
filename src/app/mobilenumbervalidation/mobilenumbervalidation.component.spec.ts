import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilenumbervalidationComponent } from './mobilenumbervalidation.component';

describe('MobilenumbervalidationComponent', () => {
  let component: MobilenumbervalidationComponent;
  let fixture: ComponentFixture<MobilenumbervalidationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobilenumbervalidationComponent]
    });
    fixture = TestBed.createComponent(MobilenumbervalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
