export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  private AGED_BRIE = "Aged Brie";
  private BACKSTAGE_PASS = "Backstage passes to a TAFKAL80ETC concert";
  private SULFURAS = "Sulfuras, Hand of Ragnaros";
  public items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (const item of this.items) {
      if (item.name === this.SULFURAS) continue;
      const itemNames = {
        [this.AGED_BRIE]: this.updateAgedBrie,
        [this.BACKSTAGE_PASS]: this.updateBackstagePass,
      };
      const updateFn = itemNames[item.name] ?? this.updateDefault;
  
      updateFn(item);
    }

    return this.items;
  }

  private updateAgedBrie(item: Item) {
    let toQualityAdd = 0;

    item.sellIn = item.sellIn - 1;
    if (item.quality < 50) toQualityAdd++;
    if (item.sellIn < 0 && item.quality < 50) toQualityAdd++;
    item.quality = item.quality + toQualityAdd;
  }

  private updateBackstagePass(item: Item) {
    let toQualityAdd = 1;

    if (item.quality < 50 && item.sellIn < 11) toQualityAdd++;
    if (item.quality < 50 && item.sellIn < 6) toQualityAdd++;

    item.quality = item.quality + toQualityAdd;
    item.sellIn = item.sellIn - 1;

    if (item.sellIn < 0) item.quality = 0;
  }

  private updateDefault(item: Item) {
    let toQualitySubstract = 0;

    item.sellIn = item.sellIn - 1;
    if (item.quality > 0) toQualitySubstract--;
    if (item.sellIn < 0 && item.quality > 0) toQualitySubstract--;
    item.quality = item.quality + toQualitySubstract;
  }
}
