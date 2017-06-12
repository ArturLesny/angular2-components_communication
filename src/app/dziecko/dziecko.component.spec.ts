import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DzieckoComponent } from './dziecko.component';

describe('DzieckoComponent', () => {
  let component: DzieckoComponent;
  let fixture: ComponentFixture<DzieckoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DzieckoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DzieckoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
