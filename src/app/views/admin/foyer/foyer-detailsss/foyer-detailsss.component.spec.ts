import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoyerDetailsssComponent } from './foyer-detailsss.component';

describe('FoyerDetailsssComponent', () => {
  let component: FoyerDetailsssComponent;
  let fixture: ComponentFixture<FoyerDetailsssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoyerDetailsssComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoyerDetailsssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
