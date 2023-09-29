import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplycompoffComponent } from './applycompoff.component';

describe('ApplycompoffComponent', () => {
  let component: ApplycompoffComponent;
  let fixture: ComponentFixture<ApplycompoffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplycompoffComponent]
    });
    fixture = TestBed.createComponent(ApplycompoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
