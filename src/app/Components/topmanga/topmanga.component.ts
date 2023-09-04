import { Component } from '@angular/core';
import { ITopManga } from 'src/models/itop-manga';

@Component({
  selector: 'app-topmanga',
  templateUrl: './topmanga.component.html',
  styles: [
  ]
})
export class TopmangaComponent {

  topManga:ITopManga[] = [
    {
      id:1,
      Title:"Demon Slayer",
      Desc:"In a world plagued by demons, a young boy named Tanjiro Kamado becomes a demon slayer to avenge his family and cure his sister",
      Type:"Drama",
      Price:188,
      imageURL:"assets/images/demon.jpg",
    },
    {
      id:3,
      Title:"Attack on titan",
      Desc:"Humanity resides within enormous walled cities to protect themselves from giant humanoid creatures known as Titans. Eren Yeager and his friends join the fight against these monstrous beings.",
      Type:"Drama",
      Price:200,
      imageURL:"assets/images/aotbg.jpg",
    },
    {
      id:2,
      Title:"Hunter X Hunter",
      Desc:"Follow Gon Freecss, a young boy who aspires to become a hunter and find his missing father. Along the way, he forms friendships and faces numerous challenges.",
      Type:"Drama / Action",
      Price:120,
      imageURL:"assets/images/hunter.jpg",
    },
  ]


}
