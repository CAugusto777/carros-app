import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlindagemGlobal } from './blindagem-global';

describe('BlindagemGlobal', () => {
  let component: BlindagemGlobal;
  let fixture: ComponentFixture<BlindagemGlobal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlindagemGlobal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlindagemGlobal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
