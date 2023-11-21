import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyGiantComponent } from './baby-giant.component';

describe('BabyGiantComponent', () => {
  let component: BabyGiantComponent;
  let fixture: ComponentFixture<BabyGiantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BabyGiantComponent]
    });
    fixture = TestBed.createComponent(BabyGiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
