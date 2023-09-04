import { Component } from '@angular/core';
import { IManga } from 'src/models/imanga';

@Component({
  selector: 'app-mangalist',
  templateUrl: './mangalist.component.html',
  styles: [
  ]
})
export class MangalistComponent {

  // constructor(private mangaLst:IManga) {
  //   mangaLst = [];
  // }
  mangaList: IManga[] =[
    {
      id:1,
      Title:"Demon Slayer",
      Desc:"Praesent tincidunt sed tellus ut rutrum sed vitae justo",
      Type:"Drama",
      Price:188,
      imageURL:"assets/images/demon.jpg",
    },
    {
      id:2,
      Title:"Hunter X Hunter",
      Desc:"Praesent tincidunt sed tellus ut rutrum sed vitae justo",
      Type:"Drama / Action",
      Price:120,
      imageURL:"assets/images/hunter.jpg",
    },
    {
      id:3,
      Title:"Attack on titan",
      Desc:"Praesent tincidunt sed tellus ut rutrum sed vitae justo",
      Type:"Drama",
      Price:200,
      imageURL:"assets/images/aot1.jpg",
    },

    {
      id:4,
      Title:"Toto movie",
      Desc:"Praesent tincidunt sed tellus ut rutrum sed vitae justo",
      Type:"Drama / Action",
      Price:120,
      imageURL:"assets/images/toto.jpg",
    },
    {
      id:5,
      Title:"Spy x family",
      Desc:"Praesent tincidunt sed tellus ut rutrum sed vitae justo",
      Type:"Drama / Action",
      Price:100,
      imageURL:"../../../assets/images/spy.jpg",
    },
    {
      id:6,
      Title:"Who Killed MS Gane",
      Desc:"Praesent tincidunt sed tellus ut rutrum sed vitae justo",
      Type:"Drama / Action",
      Price:120,
      imageURL:"assets/images/1jpg.jpg",
    },

  ]
}
