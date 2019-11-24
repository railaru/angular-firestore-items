import { Component, OnInit } from '@angular/core';
import { ItemService } from './../../services/item.service';

import Item from './../../models/item.interface';


@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit {

  item: Item = {
    title: '',
    description: '',
  };

  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.item.title && this.item.description) {
      this.itemService.addItem(this.item);
      this.clearFields();
    }
  }

  clearFields() {
    this.item.title = '';
    this.item.description = '';
  }
}
