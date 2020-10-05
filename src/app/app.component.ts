import { Component } from '@angular/core';
import { AnimeDataService } from './global/services/anime-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'ngrx-training';

  constructor(private animeDataService: AnimeDataService) {

  }

  logChange(index) {
    this.animeDataService.getAnimeList();
    console.log(index);
  }
}
