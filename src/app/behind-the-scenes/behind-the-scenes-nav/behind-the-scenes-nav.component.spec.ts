import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehindTheScenesNavComponent } from './behind-the-scenes-nav.component';

describe('BehindTheScenesNavComponent', () => {
  let component: BehindTheScenesNavComponent;
  let fixture: ComponentFixture<BehindTheScenesNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BehindTheScenesNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BehindTheScenesNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
