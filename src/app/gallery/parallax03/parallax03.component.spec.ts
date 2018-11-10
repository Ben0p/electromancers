import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Parallax03Component } from './parallax03.component';

describe('Parallax03Component', () => {
  let component: Parallax03Component;
  let fixture: ComponentFixture<Parallax03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Parallax03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Parallax03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
