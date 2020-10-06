import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMagazineComponent } from './home-magazine.component';

describe('HomeMagazineComponent', () => {
  let component: HomeMagazineComponent;
  let fixture: ComponentFixture<HomeMagazineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMagazineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMagazineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
