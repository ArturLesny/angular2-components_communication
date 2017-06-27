import { async, fakeAsync, tick, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";

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

  describe('Dwie wersje testów pola "input" :', () => {});

  it('sprawdza czy wartość wpowadzona w polu input jest zachowywana w zmiennej "nazwa_rodzic" (v.1)', done => {
    sendInput('Ktoś inny').then(() => {
      fixture.detectChanges();
      expect(component.nazwa_rodzic).toEqual('Ktoś inny');
      done();
    });
  });

  function sendInput(text: string) {
    let inputElement: HTMLInputElement;
    inputElement = fixture.nativeElement.querySelector('input[name=pole_do_wpisania]');
    inputElement.value = text;
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    return fixture.whenStable();
  }

  it('sprawdza czy wartość wpowadzona w polu input jest zachowywana w zmiennej "nazwa_rodzic" (v.2)', fakeAsync(() => {
    setInputValue('#pole_do_wpisania', 'Ktoś inny');
    expect(component.nazwa_rodzic).toEqual('Ktoś inny');
  }));

  function setInputValue(selector: string, value: string) {
    fixture.detectChanges();
    tick();
    let input = fixture.debugElement.query(By.css(selector)).nativeElement;
    input.value = value;
    input.dispatchEvent(new Event('input'));
    tick();
  }

});
