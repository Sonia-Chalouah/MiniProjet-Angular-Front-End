import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBlocsComponent } from './get-blocs.component';

describe('GetBlocsComponent', () => {
  let component: GetBlocsComponent;
  let fixture: ComponentFixture<GetBlocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetBlocsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetBlocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
