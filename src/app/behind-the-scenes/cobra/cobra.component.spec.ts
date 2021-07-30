import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CobraComponent } from './cobra.component';

describe('CobraComponent', () => {
  let component: CobraComponent;
  let fixture: ComponentFixture<CobraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CobraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CobraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
