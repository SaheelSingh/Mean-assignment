import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items: any

  constructor(private item: ItemService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  toggleAvailability(selectedItem: any) {
    this.item.toggleItemAvailability(selectedItem._id).subscribe(updatedItem => {
      selectedItem.available = updatedItem.available;
    })
  }

  fetchData() {
    this.item.getItems().subscribe(data => {
      this.items = data
      console.log(data)
    })
  }

  handleAllAvailable() {
    this.item.makeAllItemAvailable().subscribe(updateData => {
      console.log(updateData)
    });
    this.fetchData();
  }

  handleAllUnAvailable() {
    this.item.makeAllItemUnAvailable().subscribe(updateData => {
      console.log(updateData)
    });
    this.fetchData();
  }

  listAllAvailableItem() {
    this.item.getAllAvailableItems().subscribe(data => {
      this.items = data
    })
  }

  listAllUnAvailableItem() {
    this.item.getAllUnAvailableItems().subscribe(data => {
      this.items = data
    })
  }
  
}
