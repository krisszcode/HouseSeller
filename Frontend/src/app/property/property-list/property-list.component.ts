import { Component, OnInit } from '@angular/core';
import { HttpClientJsonpModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.sass']
})
export class PropertyListComponent implements OnInit {

  properties: any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('data/properties.json').subscribe(
      data=>{
        this.properties = data;
      }
    );
  }

}
