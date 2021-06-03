import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcusineComponent } from './viewcusine.component';

describe('ViewcusineComponent', () => {
  let component: ViewcusineComponent;
  let fixture: ComponentFixture<ViewcusineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcusineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcusineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
