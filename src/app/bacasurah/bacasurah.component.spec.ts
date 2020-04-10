import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BacasurahComponent } from './bacasurah.component';

describe('BacasurahComponent', () => {
  let component: BacasurahComponent;
  let fixture: ComponentFixture<BacasurahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BacasurahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BacasurahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
