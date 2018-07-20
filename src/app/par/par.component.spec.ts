import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParComponent } from './par.component';

describe('ParComponent', () => {
  let component: ParComponent;
  let fixture: ComponentFixture<ParComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
