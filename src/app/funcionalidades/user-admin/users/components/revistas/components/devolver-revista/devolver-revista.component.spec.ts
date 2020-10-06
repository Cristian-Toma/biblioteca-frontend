import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevolverRevistaComponent } from './devolver-revista.component';

describe('DevolverRevistaComponent', () => {
  let component: DevolverRevistaComponent;
  let fixture: ComponentFixture<DevolverRevistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevolverRevistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevolverRevistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
