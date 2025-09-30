import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlindagemSbi } from './blindagem-sbi';

describe('BlindagemSbi', () => {
  let component: BlindagemSbi;
  let fixture: ComponentFixture<BlindagemSbi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlindagemSbi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlindagemSbi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
