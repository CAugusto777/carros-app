import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagFord } from './pag-ford';

describe('PagFord', () => {
  let component: PagFord;
  let fixture: ComponentFixture<PagFord>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagFord]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagFord);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
