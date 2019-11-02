import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PremotavanjeComponent } from './premotavanje.component';

describe('PremotavanjeComponent', () => {
  let component: PremotavanjeComponent;
  let fixture: ComponentFixture<PremotavanjeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremotavanjeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremotavanjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
