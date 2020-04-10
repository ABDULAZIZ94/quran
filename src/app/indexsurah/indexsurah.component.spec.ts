import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexsurahComponent } from './indexsurah.component';

describe('IndexsurahComponent', () => {
  let component: IndexsurahComponent;
  let fixture: ComponentFixture<IndexsurahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexsurahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexsurahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
