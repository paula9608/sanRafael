import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaTallerComponent } from './vista-taller.component';

describe('VistaTallerComponent', () => {
  let component: VistaTallerComponent;
  let fixture: ComponentFixture<VistaTallerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaTallerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaTallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
