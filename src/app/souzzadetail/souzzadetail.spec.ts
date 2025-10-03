import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Souzzadetail } from './souzzadetail';

describe('Souzzadetail', () => {
  let component: Souzzadetail;
  let fixture: ComponentFixture<Souzzadetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Souzzadetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Souzzadetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
