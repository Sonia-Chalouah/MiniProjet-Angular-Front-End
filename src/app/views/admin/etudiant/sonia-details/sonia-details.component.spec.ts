import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoniaDetailsComponent } from './sonia-details.component';

describe('SoniaDetailsComponent', () => {
  let component: SoniaDetailsComponent;
  let fixture: ComponentFixture<SoniaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoniaDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoniaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
