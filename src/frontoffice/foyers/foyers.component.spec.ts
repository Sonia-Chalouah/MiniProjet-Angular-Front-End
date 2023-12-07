import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoyersComponent } from './foyers.component';

describe('FoyersComponent', () => {
  let component: FoyersComponent;
  let fixture: ComponentFixture<FoyersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoyersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoyersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
