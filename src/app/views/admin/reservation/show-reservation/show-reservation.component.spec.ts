import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowReservationComponent } from './show-reservation.component';

describe('ShowReservationComponent', () => {
  let component: ShowReservationComponent;
  let fixture: ComponentFixture<ShowReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowReservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
