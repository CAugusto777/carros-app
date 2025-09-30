import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Marcablindagem } from './marcablindagem';

describe('Marcablindagem', () => {
  let component: Marcablindagem;
  let fixture: ComponentFixture<Marcablindagem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Marcablindagem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Marcablindagem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
