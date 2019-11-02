import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BbPostComponent } from './bb-post.component';

describe('BbPostComponent', () => {
  let component: BbPostComponent;
  let fixture: ComponentFixture<BbPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BbPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BbPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
