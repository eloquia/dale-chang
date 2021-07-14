import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BehindTheScenesComponent } from './behind-the-scenes.component';

describe('BehindTheScenesComponent', () => {
  let component: BehindTheScenesComponent;
  let fixture: ComponentFixture<BehindTheScenesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BehindTheScenesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BehindTheScenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
