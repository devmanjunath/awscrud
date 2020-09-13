import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'https://ia13m20am0.execute-api.ap-south-1.amazonaws.com/crud';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(baseUrl);
  }

  get(id) {
    return this.http.get(`${baseUrl}?TitleID=${id}`);
  }

  create(data) {
    return this.http.post(baseUrl, data);
  }

  update(id, data) {
    return this.http.put(`${baseUrl}?TitleID=${id}`, data);
  }

  delete(id) {
    return this.http.delete(`${baseUrl}?TitleID=${id}`);
  }
}