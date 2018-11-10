import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Parallax01Component } from './parallax01.component';

describe('Parallax01Component', () => {
  let component: Parallax01Component;
  let fixture: ComponentFixture<Parallax01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Parallax01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Parallax01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
