import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MillerComponent } from './miller.component';

describe('MillerComponent', () => {
  let component: MillerComponent;
  let fixture: ComponentFixture<MillerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MillerComponent]
    });
    fixture = TestBed.createComponent(MillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
