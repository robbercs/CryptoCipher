import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiffieHellmanComponent } from './diffie-hellman.component';

describe('DiffieHellmanComponent', () => {
  let component: DiffieHellmanComponent;
  let fixture: ComponentFixture<DiffieHellmanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiffieHellmanComponent]
    });
    fixture = TestBed.createComponent(DiffieHellmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
