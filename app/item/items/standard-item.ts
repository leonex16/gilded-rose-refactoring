import { Item } from "@/item/item";

export class StandardItem extends Item {
  constructor(item: { name: string; sellIn: number; quality: number }) {
    super(item);
  }

  public updateQuality(): void {
    this.sellIn.decrement();
    if (this.quality.value > 0) this.quality.decrement();
    if (this.sellIn.value < 0 && this.quality.value > 0) this.quality.decrement();
  }
}