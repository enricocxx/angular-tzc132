import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuzikaPostComponent } from './muzika-post.component';

describe('MuzikaPostComponent', () => {
  let component: MuzikaPostComponent;
  let fixture: ComponentFixture<MuzikaPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuzikaPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuzikaPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
