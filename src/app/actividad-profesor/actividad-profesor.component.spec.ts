import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadProfesorComponent } from './actividad-profesor.component';

describe('ActividadProfesorComponent', () => {
  let component: ActividadProfesorComponent;
  let fixture: ComponentFixture<ActividadProfesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadProfesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
