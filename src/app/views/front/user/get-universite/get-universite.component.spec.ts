import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetUniversiteComponent } from './get-universite.component';

describe('GetUniversiteComponent', () => {
  let component: GetUniversiteComponent;
  let fixture: ComponentFixture<GetUniversiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetUniversiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetUniversiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
