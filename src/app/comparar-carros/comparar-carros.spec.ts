import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompararCarros } from './comparar-carros';

describe('CompararCarros', () => {
  let component: CompararCarros;
  let fixture: ComponentFixture<CompararCarros>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompararCarros]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompararCarros);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
