import { async, fakeAsync, tick, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";

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

  it('sprawdza czy wartość wpowadzona w polu input jest zachowywana w zmiennej "nazwa_dziecko"', fakeAsync(() => {
    setInputValue('#input_dziecko', 'Ktoś inny u dziecka');
    expect(component.nazwa_dziecko).toEqual('Ktoś inny u dziecka');
  }));

  it('sprawdza czy reaguje na przycisk "Zmień" i wysyła zdarzenie o zmianie zawartości pola input', fakeAsync((): void => {
    setInputValue('#input_dziecko', 'Ktoś inny u dziecka');
    spyOn(component.change_nazwa, 'emit');
    let button = findElement('#input_dziecko');
    button.click();
    fixture.detectChanges();
    tick();
    expect(component.change_nazwa.emit).toHaveBeenCalledWith({ nazwa: 'Ktoś inny u dziecka' });
  }));

  function setInputValue(selector: string, value: string) {
    fixture.detectChanges();
    tick();
    let input = findElement(selector);
    input.value = value;
    input.dispatchEvent(new Event('input'));
    tick();
  }

  function findElement(selector: string): any {
    return fixture.debugElement.query(By.css(selector)).nativeElement;
  }

});
