import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCheckProductoComponent } from './dialog-check-producto.component';

describe('DialogCheckProductoComponent', () => {
  let component: DialogCheckProductoComponent;
  let fixture: ComponentFixture<DialogCheckProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCheckProductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogCheckProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
