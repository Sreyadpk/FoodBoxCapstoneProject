import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaddrComponent } from './editaddr.component';

describe('EditaddrComponent', () => {
  let component: EditaddrComponent;
  let fixture: ComponentFixture<EditaddrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaddrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaddrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
