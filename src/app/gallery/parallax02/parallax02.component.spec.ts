import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Parallax02Component } from './parallax02.component';

describe('Parallax02Component', () => {
  let component: Parallax02Component;
  let fixture: ComponentFixture<Parallax02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Parallax02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Parallax02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
