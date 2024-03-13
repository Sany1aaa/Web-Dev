import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from './models';
import { Photos } from './models';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private client: HttpClient) { }


  createAlbum(album: Album): Observable<Album>{
    return this.client.post<Album>(this.apiUrl, album)
  }

  getAlbums(): Observable<Album[]>{
    return this.client.get<Album[]>(this.apiUrl);
  }

  getAlbum(id: number): Observable<Album>{
    return this.client.get<Album>(`${this.apiUrl}/${id}`);
  }

  updateAlbum(album: Album): Observable<Album> {
    const url = `${this.apiUrl}/${album.id}`;
    return this.client.put<Album>(url, album);
  }

  deleteAlbum(id:number){
    return this.client.delete(`${this.apiUrl}/${id}`);
  }

  getAlbumPhotos(albumId: number){
    return this.client.get<Photos[]>(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`);
  }
}