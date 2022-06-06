import { Item } from "../item";

export class SulfurasItem extends Item {
  constructor(item: { name: string; sellIn: number; quality: number }) {
    super(item);
  }

  updateQuality(): void {}
}