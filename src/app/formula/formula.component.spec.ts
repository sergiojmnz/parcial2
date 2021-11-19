import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaComponent } from './formula.component';

describe('FormulaComponent', () => {
  let component: FormulaComponent;
  let fixture: ComponentFixture<FormulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return 282.6 if input is h = 10 and r = 3', () => {
    const fixture = TestBed.createComponent(FormulaComponent);
    const app = fixture.componentInstance;
    const result = app.formulaCilindro();
    expect(result).toBe();
  });

  it('should return 0 if input is h = 0 and r = 0', () => {
    const fixture = TestBed.createComponent(FormulaComponent);
    const app = fixture.componentInstance;
    const result = app.formulaCilindro();
    expect(result).toBe();
  });
});
