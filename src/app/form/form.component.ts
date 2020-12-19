import { Component, OnInit } from '@angular/core';
import {Item} from '../models/item.model'
import { ItemService } from '../Services/item.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],

})
export class FormComponent implements OnInit {
  newitem = new Item();
  msg : string;

  constructor(private itemService: ItemService) { }
  add(){
    this.itemService.ajouter(this.newitem);
   }
  ngOnInit(): void {
  }

}
