import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimesCardComponent } from './animes-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/material/material.module';

describe('AnimesCardComponent', () => {
  let component: AnimesCardComponent;
  let fixture: ComponentFixture<AnimesCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimesCardComponent ],
      imports: [BrowserAnimationsModule, MaterialModule],
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
