import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaadsComponent } from './caads.component';

describe('CaadsComponent', () => {
  let component: CaadsComponent;
  let fixture: ComponentFixture<CaadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaadsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
