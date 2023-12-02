import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiqueFoyerComponent } from './statistique-foyer.component';

describe('StatistiqueFoyerComponent', () => {
  let component: StatistiqueFoyerComponent;
  let fixture: ComponentFixture<StatistiqueFoyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatistiqueFoyerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatistiqueFoyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
