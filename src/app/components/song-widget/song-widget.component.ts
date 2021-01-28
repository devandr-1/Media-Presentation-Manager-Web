import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ISong, SongService } from 'src/app/services/song.service';

@Component({
  selector: 'mpm-song-widget',
  templateUrl: './song-widget.component.html',
  styleUrls: ['./song-widget.component.css'],
  providers: [
    SongService
  ]
})
export class SongWidgetComponent implements OnInit {

  song$: Observable<ISong>;

  constructor(
    private readonly _songService: SongService
  ) { }

  ngOnInit(): void {
    this.song$ = this._songService.getSong();
  }

}
