import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestarRevistaComponent } from './prestar-revista.component';

describe('PrestarRevistaComponent', () => {
  let component: PrestarRevistaComponent;
  let fixture: ComponentFixture<PrestarRevistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestarRevistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestarRevistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
