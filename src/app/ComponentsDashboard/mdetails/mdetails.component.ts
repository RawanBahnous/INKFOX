import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataserviceService } from 'src/app/Services/dataservice.service';

@Component({
  selector: 'app-mdetails',
  templateUrl: './mdetails.component.html',
  styles: [
  ]
})
export class MdetailsComponent implements OnInit{
  mangaLst:any;
  mangaId:any;
  constructor(private dataServ:DataserviceService,private route :ActivatedRoute) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (param) => {
        this.mangaId = param.get('id');
        this.mangaLst = this.dataServ.getMangaById(+this.mangaId)
      }
    )
  }


  back(){
    history.back();
  }


}
