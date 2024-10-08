import { Component, Input } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {

  constructor(private item: ItemService) { }

  @Input() items: any[] = [];

  toggleAvailability(selectedItem: any) {
    this.item.toggleItemAvailability(selectedItem._id).subscribe(updatedItem => {
      selectedItem.available = updatedItem.available;
    })
  }

}
