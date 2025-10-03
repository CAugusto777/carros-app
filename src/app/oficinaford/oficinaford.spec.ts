import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oficinaford } from './oficinaford';

describe('Oficinaford', () => {
  let component: Oficinaford;
  let fixture: ComponentFixture<Oficinaford>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Oficinaford]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oficinaford);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
