import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PohligComponent } from './pohlig.component';

describe('PohligComponent', () => {
  let component: PohligComponent;
  let fixture: ComponentFixture<PohligComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PohligComponent]
    });
    fixture = TestBed.createComponent(PohligComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
