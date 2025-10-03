import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oficinaporshe } from './oficinaporshe';

describe('Oficinaporshe', () => {
  let component: Oficinaporshe;
  let fixture: ComponentFixture<Oficinaporshe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Oficinaporshe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oficinaporshe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
