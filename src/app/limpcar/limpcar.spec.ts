import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Limpcar } from './limpcar';

describe('Limpcar', () => {
  let component: Limpcar;
  let fixture: ComponentFixture<Limpcar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Limpcar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Limpcar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
