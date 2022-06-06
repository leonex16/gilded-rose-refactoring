class ItemSellIn {
  constructor(protected sellIn: number) {}

  get value() {
    return this.sellIn;
  }

  decrement(): void {
    this.sellIn -= 1;
  }
}

class ItemQuality {
  constructor(protected quality: number) {}

  get value() {
    return this.quality;
  }

  decrement(): void {
    this.quality -= 1;
  }

  increment(): void {
    this.quality += 1;
  }

  setZero(): void {
    this.quality = 0;
  }
}

export abstract class Item {
  protected MIN_QUALITY: number = 0;
  protected MAX_QUALITY: number = 50;

  protected sellIn: ItemSellIn;
  protected quality: ItemQuality;

  constructor(protected item: { name: string; sellIn: number; quality: number }) {
    this.sellIn = new ItemSellIn(item.sellIn);
    this.quality = new ItemQuality(item.quality);
  }

  abstract updateQuality(): void;

  get sellInValue(): number {
    return this.sellIn.value;
  }

  get qualityValue(): number {
    return this.quality.value;
  }
}