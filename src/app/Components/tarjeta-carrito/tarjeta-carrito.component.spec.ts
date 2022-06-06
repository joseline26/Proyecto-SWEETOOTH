import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TarjetaCarritoComponent } from './tarjeta-carrito.component';

describe('TarjetaCarritoComponent', () => {
  let component: TarjetaCarritoComponent;
  let fixture: ComponentFixture<TarjetaCarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaCarritoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
