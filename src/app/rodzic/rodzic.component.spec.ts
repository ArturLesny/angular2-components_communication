import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { RodzicComponent } from './rodzic.component';

describe('RodzicComponent', () => {
  let component: RodzicComponent;
  let fixture: ComponentFixture<RodzicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RodzicComponent ],
      imports: [ FormsModule ],
      schemas:  [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RodzicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
