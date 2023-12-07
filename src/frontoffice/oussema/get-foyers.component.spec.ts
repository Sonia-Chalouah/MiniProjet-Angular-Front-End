import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetFoyersComponent } from './get-foyers.component';

describe('GetFoyersComponent', () => {
  let component: GetFoyersComponent;
  let fixture: ComponentFixture<GetFoyersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetFoyersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetFoyersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
