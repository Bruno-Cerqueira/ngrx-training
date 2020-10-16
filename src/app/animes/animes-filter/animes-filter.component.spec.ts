import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimesFilterComponent } from './animes-filter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/material/material.module';

describe('AnimesFilterComponent', () => {
  let component: AnimesFilterComponent;
  let fixture: ComponentFixture<AnimesFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimesFilterComponent ],
      imports: [BrowserAnimationsModule, MaterialModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
