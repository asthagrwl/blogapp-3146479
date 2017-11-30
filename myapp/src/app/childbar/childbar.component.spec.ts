import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildbarComponent } from './childbar.component';

describe('ChildbarComponent', () => {
  let component: ChildbarComponent;
  let fixture: ComponentFixture<ChildbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
