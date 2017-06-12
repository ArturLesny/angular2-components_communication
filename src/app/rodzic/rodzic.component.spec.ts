import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RodzicComponent } from './rodzic.component';

describe('RodzicComponent', () => {
  let component: RodzicComponent;
  let fixture: ComponentFixture<RodzicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RodzicComponent ]
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
