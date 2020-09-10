import { Injectable } from '@angular/core';
import { HttpClientJsonpModule, HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Iproperty } from '../property/IProperty.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

constructor(private http:HttpClient) { }

getAllProperties(): Observable<Iproperty[]>{
  return this.http.get('data/properties.json').pipe(
    map(data => {
      const propertiesArray: Array<Iproperty> = [];
      for(const id in data){
        if(data.hasOwnProperty(id)){
          propertiesArray.push(data[id]);
        }
      }
      return propertiesArray;
    })
  );
}

}
