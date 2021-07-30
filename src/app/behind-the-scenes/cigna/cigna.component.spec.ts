import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CignaComponent } from './cigna.component';

describe('CignaComponent', () => {
  let component: CignaComponent;
  let fixture: ComponentFixture<CignaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CignaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CignaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
