import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdcusineComponent } from './updcusine.component';

describe('UpdcusineComponent', () => {
  let component: UpdcusineComponent;
  let fixture: ComponentFixture<UpdcusineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdcusineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdcusineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
