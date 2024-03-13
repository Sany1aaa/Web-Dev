import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Album } from '../models';
import { AlbumsService } from '../albums.service';
import { Photos } from '../models';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent implements OnInit {
  albumId: number | undefined;
  photos!: Photos[];
  loaded: boolean = false;

  constructor(private albumServise: AlbumsService, 
              private route: ActivatedRoute){
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) =>{
      if(params.get('id')){
        this.albumId = Number(params.get('id'));
        this.loaded = false;
        this.albumServise.getAlbumPhotos(this.albumId).subscribe((album) =>{
          this.photos = album;
          this.loaded = true;
        });
      }
    });
  }
}