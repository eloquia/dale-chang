import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutsideWorkComponent } from './outside-work.component';

describe('OutsideWorkComponent', () => {
  let component: OutsideWorkComponent;
  let fixture: ComponentFixture<OutsideWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutsideWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutsideWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
