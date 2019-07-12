import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmoothiesFormComponent } from './smoothies-form.component';

describe('SmoothiesFormComponent', () => {
  let component: SmoothiesFormComponent;
  let fixture: ComponentFixture<SmoothiesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmoothiesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmoothiesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
