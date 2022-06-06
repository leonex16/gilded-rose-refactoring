import { Item } from "../item";

export class BackstagePassItem extends Item {
  constructor(item: { name: string; sellIn: number; quality: number }) {
    super(item);
  }

  updateQuality(): void {
    this.quality.increment();

    if (this.quality.value < this.MAX_QUALITY && this.sellIn.value < 11) this.quality.increment();
    if (this.quality.value < this.MAX_QUALITY && this.sellIn.value < 6) this.quality.increment();

    this.sellIn.decrement();

    if (this.sellIn.value < 0) this.quality.setZero();
  }
}