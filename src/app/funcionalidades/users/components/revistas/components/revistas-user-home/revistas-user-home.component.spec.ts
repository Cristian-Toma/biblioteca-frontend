import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevistasUserHomeComponent } from './revistas-user-home.component';

describe('RevistasUserHomeComponent', () => {
  let component: RevistasUserHomeComponent;
  let fixture: ComponentFixture<RevistasUserHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevistasUserHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevistasUserHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
