import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagDetail } from './pag-detail';

describe('PagDetail', () => {
  let component: PagDetail;
  let fixture: ComponentFixture<PagDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
