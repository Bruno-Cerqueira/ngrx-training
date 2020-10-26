import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimesCardComponent } from './animes-card.component';

describe('AnimesCardComponent', () => {
  let component: AnimesCardComponent;
  let fixture: ComponentFixture<AnimesCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimesCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
