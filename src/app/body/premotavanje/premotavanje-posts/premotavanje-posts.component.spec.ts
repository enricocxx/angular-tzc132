import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PremotavanjePostsComponent } from './premotavanje-posts.component';

describe('PremotavanjePostsComponent', () => {
  let component: PremotavanjePostsComponent;
  let fixture: ComponentFixture<PremotavanjePostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremotavanjePostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremotavanjePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
