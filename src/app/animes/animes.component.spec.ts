import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimeDataServiceStub } from '../global/services/anime-data-service.stub';
import { AnimeDataService } from '../global/services/anime-data.service';
import { MaterialModule } from '../material/material.module';

import { AnimesComponent } from './animes.component';

describe('AnimesComponent', () => {
  let component: AnimesComponent;
  let fixture: ComponentFixture<AnimesComponent>;
  let animeService: AnimeDataService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimesComponent ],
      imports: [BrowserAnimationsModule, MaterialModule],
      providers: [AnimeDataServiceStub]
    })
    .compileComponents();

    animeService = TestBed.inject(AnimeDataService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    spyOn(animeService, 'getGenreList').and.returnValue(Promise.resolve(['anime']))
    expect(component).toBeTruthy();
  });
});
