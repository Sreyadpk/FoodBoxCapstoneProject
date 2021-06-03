import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemcusineComponent } from './remcusine.component';

describe('RemcusineComponent', () => {
  let component: RemcusineComponent;
  let fixture: ComponentFixture<RemcusineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemcusineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemcusineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
