import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  getItems() {
    return this.http.get('http://localhost:4000/');
  }

  toggleItemAvailability(id: any): Observable <any> {
    return this.http.put(`http://localhost:4000/item/${id}`, {})
  }

  makeAllItemAvailable(): Observable <any> {
    return this.http.put('http://localhost:4000/makeAllAvailable', {})
  }

  makeAllItemUnAvailable(): Observable <any> {
    return this.http.put('http://localhost:4000/makeAllUnAvailable', {})
  }

  getAllAvailableItems() {
    return this.http.get('http://localhost:4000/available');
  }

  getAllUnAvailableItems() {
    return this.http.get('http://localhost:4000/unavailable');
  }

}
