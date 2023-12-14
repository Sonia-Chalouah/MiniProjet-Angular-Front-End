import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCommandComponent } from './update-command.component';

describe('UpdateCommandComponent', () => {
  let component: UpdateCommandComponent;
  let fixture: ComponentFixture<UpdateCommandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCommandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
