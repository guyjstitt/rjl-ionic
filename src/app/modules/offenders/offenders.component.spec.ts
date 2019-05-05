import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffendersComponent } from './offenders.component';

describe('OffendersComponent', () => {
  let component: OffendersComponent;
  let fixture: ComponentFixture<OffendersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OffendersComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffendersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
