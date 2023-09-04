import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataserviceService } from 'src/app/Services/dataservice.service';

@Component({
  selector: 'app-mmdet',
  templateUrl: './mmdet.component.html',
  styles: [
  ]
})
export class MmdetComponent implements OnInit{
  mangaLst:any;
  mangaId:any;
  constructor(private dataServ:DataserviceService,private route :ActivatedRoute) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (param) => {
        this.mangaId = param.get('id');
        // console.log(+this.mangaId);
        this.mangaLst = this.dataServ.getMangaById(+this.mangaId)
        // console.log(this.mangaLst);
      }
    )
  }


  back(){
    history.back();
  }


}
