import { Item } from "../item";

export class AgedBrieItem extends Item {
  constructor(item: { name: string; sellIn: number; quality: number }) {
    super(item);
  }

  updateQuality(): void {
    this.sellIn.decrement();
    if (this.quality.value < this.MAX_QUALITY) this.quality.increment();
    if (this.sellIn.value < 0 && this.quality.value < this.MAX_QUALITY) this.quality.increment();
  }
}