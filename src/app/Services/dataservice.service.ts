import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IManga } from 'src/models/imanga';
import { ITypes } from 'src/models/itypes';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
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

  typesList: ITypes[] = [
    { id: 1, typename: 'Action',Desc:"Action manga is all about thrilling adventures, intense battles, and high-stakes conflicts. These stories are filled with action-packed sequences, powerful heroes, and formidable villains. From martial arts tournaments to epic showdowns between superhuman abilities, action manga keeps readers on the edge of their seats with its adrenaline-pumping storytelling. " },
    { id: 2, typename: 'Drama',Desc:"These stories often revolve around characters facing personal challenges, difficult life decisions, or emotional turmoil. They explore themes like love, loss, friendship, and personal growth. Drama manga can be heartwarming and poignant, making readers deeply empathize with the characters' struggles." },
    { id: 3, typename: 'Fantazia',Desc:"Fantasy manga transports readers to magical realms, where the impossible becomes reality. These stories feature fantastical creatures, enchanted landscapes, and mystical powers. Whether set in medieval kingdoms, modern urban fantasies, or entirely original worlds, fantasy manga offers escapism at its finest."  },
    // { id: 3, typename: 'Science Fiction',Desc:"" },
  ];

  constructor() {}


  getManga(){
    return this.mangaList;
  }

  getTypes(){
    return this.typesList;
  }

  getMangaByType(type: string){
    return this.mangaList.filter((manga)=>manga.Type == type);
  }
  getDescTypeByType(typeid: any){
  return this.typesList.filter((t)=>t.id == typeid);
  }

  getMangaById(id: number){
    return this.mangaList.find((manga) => manga.id === id);
    // return this.mangaList.filter((manga)=>manga.id == id);
  }

  AddManga(Manga:IManga){
    return this.mangaList.push(Manga);
  }
  AddType(newType: ITypes) {
    if (newType) {
      const newTypeId = Math.max(...this.typesList.map((type) => type.id)) + 1;
      newType.id = newTypeId;
      this.typesList.push(newType);
    }
  }

  searchMangaByName(searchTerm: string): Observable<IManga[]> {
    const searchResults = this.mangaList.filter((manga) =>
      manga.Title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return of(searchResults);
  }
}
