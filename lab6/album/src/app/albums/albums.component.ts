import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Album } from '../models';
import { AlbumsService } from '../albums.service';
<<<<<<< HEAD
=======
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms'

>>>>>>> 8f975d4 (lab7)

@Component({
  selector: 'app-albums',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterModule, CommonModule],
=======
  imports: [RouterModule, CommonModule,FormsModule],
>>>>>>> 8f975d4 (lab7)
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit {

  albums!: Album[];
  loaded: boolean = false;
<<<<<<< HEAD

  constructor(private albumServise: AlbumsService){}
=======
  newAlbum: Album | undefined;

  constructor(private albumServise: AlbumsService){

  }
>>>>>>> 8f975d4 (lab7)

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

<<<<<<< HEAD
  createAlbum(userId: number, id: number,title: string){
    const newAlbum: Album = {
      userId, id, title
    }
    this.albumServise.createAlbum(newAlbum).subscribe((createdAlbum) => {
      this.albums.push(createdAlbum);
      console.log('Created', createdAlbum);
    });
  }

}
=======
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

 
>>>>>>> 8f975d4 (lab7)
