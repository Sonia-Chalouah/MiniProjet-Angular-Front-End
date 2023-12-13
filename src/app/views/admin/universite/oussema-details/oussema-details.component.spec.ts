import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OussemaDetailsComponent } from './oussema-details.component';

describe('OussemaDetailsComponent', () => {
  let component: OussemaDetailsComponent;
  let fixture: ComponentFixture<OussemaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OussemaDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OussemaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
