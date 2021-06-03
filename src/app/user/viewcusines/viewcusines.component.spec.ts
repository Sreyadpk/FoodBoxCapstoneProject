import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcusinesComponent } from './viewcusines.component';

describe('ViewcusinesComponent', () => {
  let component: ViewcusinesComponent;
  let fixture: ComponentFixture<ViewcusinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcusinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcusinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
