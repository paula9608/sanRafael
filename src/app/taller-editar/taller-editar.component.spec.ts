import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TallerEditarComponent } from './taller-editar.component';

describe('TallerEditarComponent', () => {
  let component: TallerEditarComponent;
  let fixture: ComponentFixture<TallerEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TallerEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TallerEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
