import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VictimsComponent } from './victims.component';

describe('VictimsComponent', () => {
  let component: VictimsComponent;
  let fixture: ComponentFixture<VictimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VictimsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VictimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
