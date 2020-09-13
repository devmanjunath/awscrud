import { Component, OnInit } from '@angular/core';
import { MusicService } from 'src/app/services/music.service';
import { Guid } from "guid-typescript";

@Component({
  selector: 'app-add-music',
  templateUrl: './add-music.component.html',
  styleUrls: ['./add-music.component.css']
})
export class AddMusicComponent implements OnInit {

  music = {
    TitleID: '',
    Title: '',
    Genre: '',
    Artist: '',
    ReleaseDate: '',
  };

  submitted = false;
  constructor(private musicService: MusicService) { }

  ngOnInit(): void {
  }

  saveTutorial() {
    const data = {
      TitleID: Guid.create().toString(),
      Title: this.music.Title,
      Genre: this.music.Genre,
      Artist: this.music.Artist,
      ReleaseDate: this.music.ReleaseDate,
    };

    this.musicService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log('weifn')
          console.log(error);
        });
  }

  newTutorial() {
    this.submitted = false;
    this.music = {
      TitleID: '',
      Title: '',
      Genre: '',
      Artist: '',
      ReleaseDate: '',
    };
  }

}
