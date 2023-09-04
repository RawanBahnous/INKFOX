import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/Services/dataservice.service';
import { ITypes } from 'src/models/itypes';
@Component({
  selector: 'app-addtype',
  templateUrl: './addtype.component.html',
  styles: [
  ]
})
export class AddtypeComponent {
  typeForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataserviceService,
    private route : Router
  ) {
    this.typeForm = this.formBuilder.group({
      title: ['', Validators.required]
    });
  }

  
  onSubmit() {
    if (this.typeForm.valid) {
      const title = this.typeForm.value.title;

      const newType: ITypes = {
        typename: title,
        id: 0,
        Desc: ''
      };
      this.dataService.AddType(newType);
      console.log(this.dataService.getTypes());

      this.typeForm.reset();
      this.route.navigate(['/admintypes']);
    }
  }
}
