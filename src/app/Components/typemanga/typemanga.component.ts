import { Component ,Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IManga } from 'src/models/imanga';
import { DataserviceService } from 'src/app/Services/dataservice.service';

@Component({
  selector: 'app-typemanga',
  templateUrl: './typemanga.component.html',
  styles: [
  ]
})
export class TypemangaComponent {
  Action:string ="Action";
  Drama:string ="Drama";
  Fantasia:string ="Fantazia";
  selectedMangaType: any;
  mangaList: IManga[]=[];
  lastmanga:any;
  Desc :any;
  constructor(private route: ActivatedRoute, private dataService: DataserviceService) {}
  index=0;
  imgsPerSlide = 3;
  totalImgs = this.mangaList.length;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.selectedMangaType = params.get('id');
      this.mangaList = this.dataService.getMangaByType(this.selectedMangaType);
      this.lastmanga = this.mangaList[this.mangaList.length - 1];
      this.Desc =  this.dataService.getDescTypeByType(this.selectedMangaType);

    });
   this.showSlide();

  }

  goBack(){
    history.back();
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

 searchingFound = true;
 searchByname(searchname:any){
  this.dataService.searchMangaByName(searchname).subscribe(
    (data:any)=>{
      this.mangaList = data;
      this.searchingFound = true;
    },
    (err:any)=>{
      console.log(err);
      this.searchingFound = false;

    }
    )
 }

}
