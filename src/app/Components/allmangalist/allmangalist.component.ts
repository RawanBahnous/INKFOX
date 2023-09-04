import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/Services/dataservice.service';
import { IManga } from 'src/models/imanga';

@Component({
  selector: 'app-allmangalist',
  templateUrl: './allmangalist.component.html',
  styles: [
  ]
})
export class AllmangalistComponent implements OnInit{

  mangalist:IManga[]=[];
  constructor(private serv:DataserviceService){}
  ngOnInit(): void {
    this.mangalist = this.serv.getManga();
  }


  searchMangaByName(searchTerm:string){
    this.serv.searchMangaByName(searchTerm).subscribe(
      (data:any)=>{
        this.mangalist = data;
      },
      (err:any)=>{
        console.log(err);
      }
    )
  }

}
