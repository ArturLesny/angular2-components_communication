import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from "@angular/forms";

import { DzieckoComponent } from './dziecko.component';

describe('DzieckoComponent', () => {
  let component: DzieckoComponent;
  let fixture: ComponentFixture<DzieckoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DzieckoComponent ],
      imports: [ FormsModule ],
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
