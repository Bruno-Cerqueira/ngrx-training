import { Component, OnInit } from '@angular/core';
import { AnimeDataService } from '../global/services/anime-data.service';

@Component({
  selector: 'app-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.sass']
})
export class AnimesComponent implements OnInit {

  constructor(private animeDataService: AnimeDataService) { }

  ngOnInit(): void {
    this.requestData();
  }

  requestData (){
    this.animeDataService.getAnimeList();
  }

}
