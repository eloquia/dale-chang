import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EloquiaComponent } from './eloquia.component';

describe('EloquiaComponent', () => {
  let component: EloquiaComponent;
  let fixture: ComponentFixture<EloquiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EloquiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EloquiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
