import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.sass']
})
export class PropertyListComponent implements OnInit {

  properties: Array<any> = [
    {
      "Id":1,
      "Name":"Birla House",
      "Type":"House",
      "Price":12000
     },{
      "Id":2,
      "Name":"Villa House",
      "Type":"House",
      "Price":15000
     },{
      "Id":3,
      "Name":"White House",
      "Type":"House",
      "Price":18000
     },{
      "Id":4,
      "Name":"White House",
      "Type":"House",
      "Price":18000
     },{
      "Id":5,
      "Name":"White House",
      "Type":"House",
      "Price":18000
     },{
      "Id":6,
      "Name":"White House",
      "Type":"House",
      "Price":18000
     },
]

  constructor() { }

  ngOnInit(): void {
  }

}
