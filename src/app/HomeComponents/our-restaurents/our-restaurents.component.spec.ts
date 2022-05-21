import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurRestaurentsComponent } from './our-restaurents.component';

describe('OurRestaurentsComponent', () => {
  let component: OurRestaurentsComponent;
  let fixture: ComponentFixture<OurRestaurentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurRestaurentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurRestaurentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
