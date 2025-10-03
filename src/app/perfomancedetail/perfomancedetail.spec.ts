import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Perfomancedetail } from './perfomancedetail';

describe('Perfomancedetail', () => {
  let component: Perfomancedetail;
  let fixture: ComponentFixture<Perfomancedetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Perfomancedetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Perfomancedetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
