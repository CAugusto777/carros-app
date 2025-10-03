import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oficinalambo } from './oficinalambo';

describe('Oficinalambo', () => {
  let component: Oficinalambo;
  let fixture: ComponentFixture<Oficinalambo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Oficinalambo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oficinalambo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
