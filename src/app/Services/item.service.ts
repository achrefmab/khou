import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';


@Injectable({
  providedIn: 'root'
})
export class ItemService {
  items : Item[];
    item = new Item();

  constructor() { }


  ajouter( ite: Item){
    this.items.push(ite);
  }
}



