import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadroChequeComponent } from './cuadro-cheque.component';

describe('CuadroChequeComponent', () => {
  let component: CuadroChequeComponent;
  let fixture: ComponentFixture<CuadroChequeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuadroChequeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuadroChequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
