import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagLambo } from './pag-lambo';

describe('PagLambo', () => {
  let component: PagLambo;
  let fixture: ComponentFixture<PagLambo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagLambo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagLambo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
