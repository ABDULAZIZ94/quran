import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Firestoretest1Component } from './firestoretest1.component';

describe('Firestoretest1Component', () => {
  let component: Firestoretest1Component;
  let fixture: ComponentFixture<Firestoretest1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Firestoretest1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Firestoretest1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
