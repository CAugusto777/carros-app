import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagMercedes } from './pag-mercedes';

describe('PagMercedes', () => {
  let component: PagMercedes;
  let fixture: ComponentFixture<PagMercedes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagMercedes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagMercedes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
