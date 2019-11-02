import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnjigePostComponent } from './knjige-post.component';

describe('KnjigePostComponent', () => {
  let component: KnjigePostComponent;
  let fixture: ComponentFixture<KnjigePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnjigePostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnjigePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
