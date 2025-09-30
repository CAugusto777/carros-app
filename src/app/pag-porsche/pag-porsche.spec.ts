import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagPorsche } from './pag-porsche';

describe('PagPorsche', () => {
  let component: PagPorsche;
  let fixture: ComponentFixture<PagPorsche>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagPorsche]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagPorsche);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
