import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaCosaInteresComponent } from './vista-cosa-interes.component';

describe('VistaCosaInteresComponent', () => {
  let component: VistaCosaInteresComponent;
  let fixture: ComponentFixture<VistaCosaInteresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaCosaInteresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaCosaInteresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
