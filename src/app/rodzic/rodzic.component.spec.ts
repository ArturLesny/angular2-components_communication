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
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
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


  describe('Pole input', () => {
    let inputElement: HTMLInputElement;

    beforeEach(() => {
      inputElement = fixture.nativeElement.querySelector('input[name=pole_do_wpisania]');
    });

    it('sprawdza czy zmiana w polu input jest zachowywana w zmiennej "nazwa_rodzic"', done => {
      sendInput('Ktoś inny').then(() => {
        fixture.detectChanges();
        expect(component.nazwa_rodzic).toEqual('Ktoś inny');
        done();
      });
    });

    function sendInput(text: string) {
      inputElement.value = text;
      inputElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      return fixture.whenStable();
    }
  });
});
