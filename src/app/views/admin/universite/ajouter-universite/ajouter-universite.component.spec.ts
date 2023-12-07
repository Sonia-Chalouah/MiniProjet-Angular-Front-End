import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterUniversiteComponent } from './ajouter-universite.component';

describe('AjouterUniversiteComponent', () => {
  let component: AjouterUniversiteComponent;
  let fixture: ComponentFixture<AjouterUniversiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterUniversiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterUniversiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
