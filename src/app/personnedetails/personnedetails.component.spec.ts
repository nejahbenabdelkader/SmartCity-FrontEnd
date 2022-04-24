import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnedetailsComponent } from './personnedetails.component';

describe('PersonnedetailsComponent', () => {
  let component: PersonnedetailsComponent;
  let fixture: ComponentFixture<PersonnedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonnedetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
