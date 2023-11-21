import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElgamalComponent } from './elgamal.component';

describe('ElgamalComponent', () => {
  let component: ElgamalComponent;
  let fixture: ComponentFixture<ElgamalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElgamalComponent]
    });
    fixture = TestBed.createComponent(ElgamalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
