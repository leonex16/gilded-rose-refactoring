import { AgedBrieItem } from '../app/item/items/aged-brie-item';
import { BackstagePassItem } from '../app/item/items/backstage-pass-item';
import { StandardItem } from '../app/item/items/standard-item';
import { SulfurasItem } from '../app/item/items/sulfuras-item';
import { GildedRose } from '../app/gilded-rose';

const items = [
  new StandardItem({ name: "+5 Dexterity Vest", sellIn: 10, quality: 20 }),
  new AgedBrieItem({ name: "Aged Brie", sellIn: 2, quality: 0 }),
  new StandardItem({ name: "Elixir of the Mongoose", sellIn: 5, quality: 7 }),
  new SulfurasItem({ name: "Sulfuras, Hand of Ragnaros", sellIn: 0, quality: 80 }),
  new SulfurasItem({ name: "Sulfuras, Hand of Ragnaros", sellIn: -1, quality: 80 }),
  new BackstagePassItem({ name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 15, quality: 20 }),
  new BackstagePassItem({ name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 10, quality: 49 }),
  new BackstagePassItem({ name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 5, quality: 49 }),
  // this conjured item does not work properly yet
  // new Item("Conjured Mana Cake", 3, 6) TODO
];

const gildedRose = new GildedRose(items);

let days: number = 2;
if (process.argv.length > 2) {
    days = +process.argv[2];
  }

for (let i = 0; i < days; i++) {
  console.log("-------- day " + i + " --------");
  console.log("name, sellIn, quality");
  items.forEach(element => {
    console.log(element.name + ' ' + element.sellInValue + ' ' + element.qualityValue);
  });
  gildedRose.updateQuality();
}
