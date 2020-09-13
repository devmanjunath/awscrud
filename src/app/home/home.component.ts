import { Component, OnInit } from '@angular/core';
import { MusicService } from 'src/app/services/music.service';
import { Router } from '@angular/router';
import { Guid } from "guid-typescript";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dmusic = {
    TitleID: '',
    Title: '',
    Genre: '',
    Artist: '',
    ReleaseDate: '',
  };

  music: any;
  currentMusic = null;
  currentIndex = -1;
  title = '';
  message = '';

  constructor(private musicService: MusicService,private router: Router) { }

  ngOnInit() {
    this.retrieveSongs();
  }

  retrieveSongs() {
    this.musicService.getAll()
      .subscribe(
        data => {
          this.music = data['Items'];
          console.log(data['Items']);
        },
        error => {
          console.log(error);
        });
  }

  refreshList() {
    this.retrieveSongs();
    this.currentMusic = null;
    this.currentIndex = -1;
  }

  getMusic(id) {
    this.musicService.get(id)
      .subscribe(
        data => {
          this.currentMusic = data['Items'][0];
          console.log(data['Items'][0]);
        },
        error => {
          console.log(error);
        });
  }

  saveTutorial() {
    const data = {
      TitleID: Guid.create().toString(),
      Title: this.dmusic.Title,
      Genre: this.dmusic.Genre,
      Artist: this.dmusic.Artist,
      ReleaseDate: this.dmusic.ReleaseDate,
    };

    this.musicService.create(data)
      .subscribe(
        response => {
          console.log(response);
          alert('The song was created successfully!');
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  updatePublished() {
    const data = {
      Title: this.currentMusic.Title,
      Artist: this.currentMusic.Artist,
      Genre: this.currentMusic.Genre,
      ReleaseDate: this.currentMusic.ReleaseDate
    };

    this.musicService.update(this.currentMusic.TitleID, data)
      .subscribe(
        response => {
          console.log(response);
          alert('The song was updated successfully!');
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  deleteMusic() {
    this.musicService.delete(this.currentMusic.TitleID)
      .subscribe(
        response => {
          console.log(response);
          alert('The song was deleted successfully!');
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }
}