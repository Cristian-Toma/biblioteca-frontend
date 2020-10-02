import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarRevistasComponent } from './buscar-revistas.component';

describe('BuscarRevistasComponent', () => {
  let component: BuscarRevistasComponent;
  let fixture: ComponentFixture<BuscarRevistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarRevistasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarRevistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
