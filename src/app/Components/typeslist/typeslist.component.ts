import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/Services/dataservice.service';

@Component({
  selector: 'app-typeslist',
  templateUrl: './typeslist.component.html',
  styleUrls: ['./typeslist.component.css']
})
export class TypeslistComponent implements OnInit{
  categoriesAction:any;
  categoriesDrama:any;
  categoriesFan:any;

  constructor(private cateServ:DataserviceService) {}
  ngOnInit(): void {
    this.categoriesAction = this.cateServ.getMangaByType("Action").slice(-4);
    this.categoriesDrama = this.cateServ.getMangaByType("Drama").slice(-4);
    this.categoriesFan = this.cateServ.getMangaByType("Fantazia").slice(-4);
  }
}
