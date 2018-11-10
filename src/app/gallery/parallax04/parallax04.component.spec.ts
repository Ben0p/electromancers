import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Parallax04Component } from './parallax04.component';

describe('Parallax04Component', () => {
  let component: Parallax04Component;
  let fixture: ComponentFixture<Parallax04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Parallax04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Parallax04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
