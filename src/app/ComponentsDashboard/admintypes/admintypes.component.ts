import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/Services/dataservice.service';

@Component({
  selector: 'app-admintypes',
  templateUrl: './admintypes.component.html',
  styles: [
  ]
})
export class AdmintypesComponent implements OnInit{
  typesLst:any;
  constructor(private dataServ:DataserviceService,private router:Router) {}
  ngOnInit(): void {
    this.typesLst = this.dataServ.getTypes().splice(0,3);

  }

search(search:any){
  if (Array.isArray(this.typesLst)) {
    this.typesLst = this.typesLst.filter((t)=>{
      return t.typename.toLowerCase().includes(search.toLowerCase());
    })
  }
}
delete(id:number){
  if (Array.isArray(this.typesLst)) {
  let index = this.typesLst.findIndex((m)=>m.id === id);
  if (index !== -1) {
    this.typesLst.splice(index,1);
  }
  }
}
sort(){
    if (Array.isArray(this.typesLst) && this.typesLst.length > 0) {
        this.typesLst = this.typesLst.sort(
          (a:any ,b:any) =>
          {
            let namea = a.typename.toLowerCase();
            const nameB = b.typename.toLowerCase();
              if (namea < nameB) return -1;
              if (namea > nameB) return 1;
              return 0;
          });
    }}

    addtype(){
this.router.navigate(['/addtype']);

    }

}
