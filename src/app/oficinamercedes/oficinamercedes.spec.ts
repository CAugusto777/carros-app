import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oficinamercedes } from './oficinamercedes';

describe('Oficinamercedes', () => {
  let component: Oficinamercedes;
  let fixture: ComponentFixture<Oficinamercedes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Oficinamercedes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oficinamercedes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
