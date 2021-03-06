import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { Iproperty } from '../IProperty.interface';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.sass']
})
export class PropertyListComponent implements OnInit {
  SellRent = 1;
  properties: Array<Iproperty>;

  constructor(private route: ActivatedRoute,private housingService: HousingService) { }

  ngOnInit(): void {
    if(this.route.snapshot.url.toString()){
      this.SellRent = 2;
      console.log(this.route.snapshot.url.toString());
    }

    this.housingService.getAllProperties(this.SellRent).subscribe(
      data=>{
            this.properties = data;
            console.log(data)
          }
    ); error=>{
      console.log('httperror');
      console.log(error);
    }
  }

}
