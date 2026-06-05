import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Departement } from './departement';

describe('Departement', () => {
  let component: Departement;
  let fixture: ComponentFixture<Departement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Departement],
    }).compileComponents();

    fixture = TestBed.createComponent(Departement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
