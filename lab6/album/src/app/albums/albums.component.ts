import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Album } from '../models';
import { AlbumsService } from '../albums.service';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms'


@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [RouterModule, CommonModule,FormsModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit {

  albums!: Album[];
  loaded: boolean = false;
  newAlbum: Album | undefined;

  constructor(private albumServise: AlbumsService){

  }

  ngOnInit(): void {
      this.loaded = false;
      this.albumServise.getAlbums().subscribe((albums) =>{
        this.albums = albums;
        this.loaded = true;
      })
  }

  deleteAlbum(id: number){
    this.albums = this.albums.filter((album) => album.id !== id);
    this.albumServise.deleteAlbum(id).subscribe(()=>{
      console.log("deleted")
    });
  }

  updateAlbum(userId: number, id: number,title: string){
    const album: Album = {
      userId, id, title
    }

    this.albumServise.updateAlbum(album).subscribe(()=>{
      console.log("updated");
    })
  }

  createAlbum(userId: number, id: number, title: string){
    const newAlbum: Album = {
      userId, id, title
    }
    this.albumServise.createAlbum(newAlbum).subscribe(
      (createdAlbum) => {
        this.albums.push(createdAlbum);
        console.log('Created', createdAlbum);
      },
      (error) => {
        console.error('Error creating album:', error);
      },
      () => {
        console.log('POST request completed');
      }
    );
  }
  
}

 