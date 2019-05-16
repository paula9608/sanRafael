import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaMinijuegosComponent } from './vista-minijuegos.component';

describe('VistaMinijuegosComponent', () => {
  let component: VistaMinijuegosComponent;
  let fixture: ComponentFixture<VistaMinijuegosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaMinijuegosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaMinijuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
