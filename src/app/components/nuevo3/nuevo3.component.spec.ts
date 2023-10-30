import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nuevo3Component } from './nuevo3.component';

describe('Nuevo3Component', () => {
  let component: Nuevo3Component;
  let fixture: ComponentFixture<Nuevo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nuevo3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Nuevo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
