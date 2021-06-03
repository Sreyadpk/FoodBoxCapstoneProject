import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersumComponent } from './ordersum.component';

describe('OrdersumComponent', () => {
  let component: OrdersumComponent;
  let fixture: ComponentFixture<OrdersumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
