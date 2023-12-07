import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouaFrontComponent } from './roua-front.component';

describe('RouaFrontComponent', () => {
  let component: RouaFrontComponent;
  let fixture: ComponentFixture<RouaFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouaFrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouaFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
