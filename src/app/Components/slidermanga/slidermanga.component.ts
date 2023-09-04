import { Component, OnInit } from '@angular/core';
import { AuthusersService } from 'src/app/Services/authusers.service';
import { DataserviceService } from 'src/app/Services/dataservice.service';
import { IManga } from 'src/models/imanga';

@Component({
  selector: 'app-slidermanga',
  templateUrl: './slidermanga.component.html',
  styleUrls: ['./slidermanga.component.css']
})
export class SlidermangaComponent implements OnInit{


  mangaList: IManga[] =[
    {
      id:1,
      Title:"Demon Slayer",
      Desc:"In a world plagued by demons, a young boy named Tanjiro Kamado becomes a demon slayer to avenge his family and cure his sister",
      Type:"Action",
      Price:188,
      imageURL:"assets/images/demon.jpg",
      display: "block"
    },
    {
      id:2,
      Title:"Hunter X Hunter",
      Desc:"Follow Gon Freecss, a young boy who aspires to become a hunter and find his missing father. Along the way, he forms friendships and faces numerous challenges.",
      Type:"Drama",
      Price:120,
      imageURL:"assets/images/hunter.jpg",
      display: "block",
    },
    {
      id:3,
      Title:"Attack on titan",
      Desc:"Humanity resides within enormous walled cities to protect themselves from giant humanoid creatures known as Titans. Eren Yeager and his friends join the fight against these monstrous beings.",
      Type:"Fantazia",
      Price:200,
      imageURL:"assets/images/aotbg.jpg",
      display: "block",
    },

    {
      id:4,
      Title:"Toto movie",
      Desc:"",
      Type:"Drama",
      Price:120,
      imageURL:"assets/images/toto.jpg",
      display: "block",
    },
    {
      id:5,
      Title:"Spy x family",
      Desc:"Praesent tincidunt sed tellus ut rutrum sed vitae justo",
      Type:"Drama / Action",
      Price:100,
      imageURL:"assets/images/spy.jpg",
      display: "block",
    },
    {
      id:6,
      Title:"Naruto",
      Desc:"Follow Naruto Uzumaki, a young ninja with dreams of becoming the strongest ninja and earning the respect of his village. Naruto's journey is filled with action, friendship, and challenges.",
      Type:"Action",
      Price:120,
      imageURL:"assets/images/Naruto.jpg",
      display: "block",
    },
    {
      id:8,
      Title:"Tokyo Ghoul",
      Desc:"Kaneki, a young man who survives a deadly encounter with a ghoul, becomes a half-ghoul himself. He must navigate the dark and dangerous world of ghouls while maintaining his humanity.",
      Type:"Drama",
      Price:188,
      imageURL:"assets/images/tokyo.jpg",
      display: "block",
    },
    {
      id:9,
      Title:"Vinland Saga",
      Desc:"Set in the Viking Age, Vinland Saga follows Thorfinn, a young warrior seeking revenge against the man who killed his father. As the story progresses, it explores themes of revenge, honor, and the desire for a peaceful life.",
      Type:"Drama",
      Price:109,
      imageURL:"assets/images/Vinland Saga.jpg",
      display: "block",
    },
    {
      id:10,
      Title:"Jujutsu Kaisen",
      Desc:"centered around action, featuring intense battles between characters who use a variety of supernatural abilities and martial arts techniques. The series is known for its dynamic and well-choreographed fight scenes",
      Type:"Action",
      Price:109,
      imageURL:"assets/images/Jujutsu Kaisen.jpg",
      display: "block",
    },
    {
      id:25,
      Title:"One Peice",
      Desc:"Join Monkey D. Luffy and his pirate crew as they search for the legendary One Piece treasure. Their adventures take them to exotic islands and bring them face-to-face with powerful foes.",
      Type:"Fantazia",
      Price:18,
      imageURL:"assets/images/onepeice.jpg",
      display: "block",
    },

    {
      id:20,
      Title:"Dragon Ball",
      Desc:"Follow the adventures of Goku and his friends as they seek the Dragon Balls and face formidable foes. Dragon Ball is known for its epic battles and martial arts.",
      Type:"Action",
      Price:188,
      imageURL:"assets/images/dragon.jpg",
      display: "block",
    },
    {
      id:21,
      Title:"Berserk",
      Desc:"Guts, a lone mercenary with a tragic past, battles against dark forces in a brutal and medieval-inspired world. Berserk is known for its dark themes and intense storytelling.",
      Type:"Fantazia",
      Price:308,
      imageURL:"assets/images/berserk.jpg",
      display: "block",
    },
    {
      id:22,
      Title:"My Hero Academia",
      Desc:"In a world where individuals have superpowers known as Quirks,Izuku Midoriya, a Quirkless boy, aims to become a hero. He inherits a powerful Quirk and joins a prestigious hero academy.",
      Type:"Action",
      Price:308,
      imageURL:"assets/images/My Hero Academia.jpg",
      display: "block",
    },


  ];
   index=0;
   imgsPerSlide = 2;
   totalImgs = this.mangaList.length;

constructor(private mangaserv:DataserviceService,public authServ:AuthusersService) {}
  ngOnInit(){
    this.showSlide();
  }
  showSlide(){
    const startIndex = this.index * this.imgsPerSlide; //0*3 = 0
    const endIndex = startIndex + this.imgsPerSlide; //the second slide being displayed - 0+3 =3
        for (let i = 0; i < this.totalImgs; i++) {
          if (i >= startIndex && i < endIndex) {
            this.mangaList[i].display = "block";
          } else {
            this.mangaList[i].display = "none";
          }
        }
   }

  next(){
    if (this.index < this.totalImgs / this.imgsPerSlide -1) {
      this.index++;
    }else{
      this.index = 0;
    }
    this.showSlide();
  }
  prev(){
    if (this.index>0) {
      this.index--;
      this.showSlide();

    }
  }

}
