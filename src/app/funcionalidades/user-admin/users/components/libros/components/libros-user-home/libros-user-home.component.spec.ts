import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosUserHomeComponent } from './libros-user-home.component';

describe('LibrosUserHomeComponent', () => {
  let component: LibrosUserHomeComponent;
  let fixture: ComponentFixture<LibrosUserHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrosUserHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrosUserHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
