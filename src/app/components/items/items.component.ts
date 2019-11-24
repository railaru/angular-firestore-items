import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';

import Item from 'src/app/models/item.interface';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  items: Item[];

  constructor(private itemsService: ItemService) { }

  ngOnInit() {
    this.itemsService.getItems().subscribe(items => {
      this.items = items;
    });
  }

  deleteItem(event, item) {
    this.itemsService.deleteItem(item);
  }
}
