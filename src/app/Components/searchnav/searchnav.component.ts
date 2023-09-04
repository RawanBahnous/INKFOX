import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { DataserviceService } from 'src/app/Services/dataservice.service';
import { IManga } from 'src/models/imanga';

@Component({
  selector: 'app-searchnav',
  templateUrl: './searchnav.component.html',
  styles: [
  ]
})
export class SearchnavComponent {

  mangalist:IManga[]=[];
  searchResults:any;
  constructor(private serv:DataserviceService) {}

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
