import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmhomeComponent } from './admhome.component';

describe('AdmhomeComponent', () => {
  let component: AdmhomeComponent;
  let fixture: ComponentFixture<AdmhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
