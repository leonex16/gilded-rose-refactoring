import { Item } from "@/item/item";

export class GildedRose {
  constructor(public items: Item[]) {}

  updateQuality() {
    this.items.forEach(item => item.updateQuality());
  }
}

