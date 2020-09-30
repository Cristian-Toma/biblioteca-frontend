import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveMagazineComponent } from './save-magazine.component';

describe('SaveMagazineComponent', () => {
  let component: SaveMagazineComponent;
  let fixture: ComponentFixture<SaveMagazineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveMagazineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveMagazineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
