import { GildedRose } from '@/gilded-rose';
import { AgedBrieItem } from '@/item/items/aged-brie-item';
import { BackstagePassItem } from '@/item/items/backstage-pass-item';
import { StandardItem } from '@/item/items/standard-item';
import { SulfurasItem } from '@/item/items/sulfuras-item';

const passDays = (items: any[], daysPassed: number) => {
  const gildedRose = new GildedRose(items);

  for (let i = 0; i < daysPassed; i++) {
    gildedRose.updateQuality();
  }

  return { updatedItems: gildedRose.items }
}

describe('Gilded Rose', () => {
  describe('**+5 Dexterity Vest**', () => {
    it('shoud decrease per two days for items', () => {
      const items = [new StandardItem({ name: "+5 Dexterity Vest", sellIn: 4, quality: 8})];
      const { updatedItems } = passDays(items, 2)

      expect( updatedItems.at(0)?.sellInValue ).toBe( 2 )
      expect( updatedItems.at(0)?.qualityValue ).toBe( 6 )
    })
  
    it('shoud decrease per four days for items', () => {
      const items = [new StandardItem({ name: "+5 Dexterity Vest", sellIn: 4, quality: 8})];
      const { updatedItems } = passDays(items, 4)
  
      expect( updatedItems.at(0)?.sellInValue ).toBe( 0 )
      expect( updatedItems.at(0)?.qualityValue ).toBe( 4 )
    })
  
    it('shoud decrease per six days for items', () => {
      const items = [new StandardItem({ name: "+5 Dexterity Vest", sellIn: 4, quality: 8})];
      const { updatedItems } = passDays(items, 6)
  
      expect( updatedItems.at(0)?.sellInValue ).toBe( -2 )
      expect( updatedItems.at(0)?.qualityValue ).toBe( 0 )
    })
  
    it('shoud decrease per eight days for items and quality must be zero', () => {
      const items = [new StandardItem({ name: "+5 Dexterity Vest", sellIn: 4, quality: 8})];
      const { updatedItems } = passDays(items, 8)
  
      expect( updatedItems.at(0)?.sellInValue ).toBe( -4 )
      expect( updatedItems.at(0)?.qualityValue ).toBe( 0 )
    })

    it('shoud decrease per ten days for items and quality must be zero', () => {
      const items = [new StandardItem({ name: "+5 Dexterity Vest", sellIn: 4, quality: 8})];
      const { updatedItems } = passDays(items, 10)
  
      expect( updatedItems.at(0)?.sellInValue ).toBe( -6 )
      expect( updatedItems.at(0)?.qualityValue ).toBe( 0 )
    })

    it('shoud decrease per twelve days for items and quality must be zero', () => {
      const items = [new StandardItem({ name: "+5 Dexterity Vest", sellIn: 4, quality: 8})];
      const { updatedItems } = passDays(items, 12)
  
      expect( updatedItems.at(0)?.sellInValue ).toBe( -8 )
      expect( updatedItems.at(0)?.qualityValue ).toBe( 0 )
    })

    it('shoud decrease per fourteen days for items and quality must be zero', () => {
      const items = [new StandardItem({ name: "+5 Dexterity Vest", sellIn: 4, quality: 8})];
      const { updatedItems } = passDays(items, 14)
  
      expect( updatedItems.at(0)?.sellInValue ).toBe( -10 )
      expect( updatedItems.at(0)?.qualityValue ).toBe( 0 )
    })

    it('shoud decrease per fifty two days for items and quality must be zero', () => {
      const items = [new StandardItem({ name: "+5 Dexterity Vest", sellIn: 4, quality: 8})];
      const { updatedItems } = passDays(items, 52)
  
      expect( updatedItems.at(0)?.sellInValue ).toBe( -48 )
      expect( updatedItems.at(0)?.qualityValue ).toBe( 0 )
    })

    it('shoud decrease per one hundred two days for items and quality must be zero', () => {
      const items = [new StandardItem({ name: "+5 Dexterity Vest", sellIn: 4, quality: 8})];
      const { updatedItems } = passDays(items, 102)
  
      expect( updatedItems.at(0)?.sellInValue ).toBe( -98 )
      expect( updatedItems.at(0)?.qualityValue ).toBe( 0 )
    })
  })

  describe('**Aged Brie**', () => {
    it('shoud decrease sellIn and increment quality per two days for items', () => {
      const items = [new AgedBrieItem({ name: "Aged Brie", sellIn: 2, quality: 0})];
      const { updatedItems } = passDays(items, 2)
  
      expect( updatedItems.at(0)?.sellInValue ).toBe( 0 )
      expect( updatedItems.at(0)?.qualityValue ).toBe( 2 )
    })
  
    it('shoud decrease sellIn and increment quality per four days for items', () => {
      const items = [new AgedBrieItem({ name: "Aged Brie", sellIn: 2, quality: 0})];
      const { updatedItems } = passDays(items, 4)
  
      expect( updatedItems.at(0)?.sellInValue ).toBe( -2 )
      expect( updatedItems.at(0)?.qualityValue ).toBe( 6 )
    })
  
    it('shoud decrease sellIn and increment quality per six days for items', () => {
      const items = [new AgedBrieItem({ name: "Aged Brie", sellIn: 2, quality: 0})];
      const { updatedItems } = passDays(items, 6)
  
      expect( updatedItems.at(0)?.sellInValue ).toBe( -4 )
      expect( updatedItems.at(0)?.qualityValue ).toBe( 10 )
    })
  
    it('shoud decrease sellIn and double increment quality per eight days for items', () => {
      const items = [new AgedBrieItem({ name: "Aged Brie", sellIn: 2, quality: 0})];
      const { updatedItems } = passDays(items, 8)
  
      expect( updatedItems.at(0)?.sellInValue ).toBe( -6 )
      expect( updatedItems.at(0)?.qualityValue ).toBe( 14 )
    })

    it('shoud decrease sellIn and double increment quality per ten days for items', () => {
      const items = [new AgedBrieItem({ name: "Aged Brie", sellIn: 2, quality: 0})];
      const { updatedItems } = passDays(items, 10)
  
      expect( updatedItems.at(0)?.sellInValue ).toBe( -8 )
      expect( updatedItems.at(0)?.qualityValue ).toBe( 18 )
    })

    it('shoud decrease sellIn and double increment quality per twelve days for items', () => {
      const items = [new AgedBrieItem({ name: "Aged Brie", sellIn: 2, quality: 0})];
      const { updatedItems } = passDays(items, 12)
  
      expect( updatedItems.at(0)?.sellInValue ).toBe( -10 )
      expect( updatedItems.at(0)?.qualityValue ).toBe( 22 )
    })

    it('shoud decrease sellIn and double increment quality per fourteen days for items', () => {
      const items = [new AgedBrieItem({ name: "Aged Brie", sellIn: 2, quality: 0})];
      const { updatedItems } = passDays(items, 14)
  
      expect( updatedItems.at(0)?.sellInValue ).toBe( -12 )
      expect( updatedItems.at(0)?.qualityValue ).toBe( 26 )
    })

    it('shoud decrease sellIn and double increment quality per fifty two days for items. Quality can not be greaten than 50', () => {
      const items = [new AgedBrieItem({ name: "Aged Brie", sellIn: 2, quality: 0})];
      const { updatedItems } = passDays(items, 52)
  
      expect( updatedItems.at(0)?.sellInValue ).toBe( -50 )
      expect( updatedItems.at(0)?.qualityValue ).toBe( 50 )
    })

    it('shoud decrease sellIn and double increment quality per one hundred two two days for items. Quality can not be greaten than 50', () => {
      const items = [new AgedBrieItem({ name: "Aged Brie", sellIn: 2, quality: 0})];
      const { updatedItems } = passDays(items, 102)
  
      expect( updatedItems.at(0)?.sellInValue ).toBe( -100 )
      expect( updatedItems.at(0)?.qualityValue ).toBe( 50 )
    })
  })

  describe('**Sulfuras, Hand of Ragnaros**', () => {
    it('shoud maintaner its init values per two days for items', () => {
      const items = [new SulfurasItem({ name: "Sulfuras, Hand of Ragnaros", sellIn: 0, quality: 80})];
      const { updatedItems } = passDays(items, 2)
  
      expect( updatedItems.at(0)?.sellInValue ).toBe( 0 )
      expect( updatedItems.at(0)?.qualityValue ).toBe( 80 )
    })
  
    it('shoud maintaner its init values per four days for items', () => {
      const items = [new SulfurasItem({ name: "Sulfuras, Hand of Ragnaros", sellIn: 0, quality: 80})];
      const { updatedItems } = passDays(items, 4)
  
      expect( updatedItems.at(0)?.sellInValue ).toBe( 0 )
      expect( updatedItems.at(0)?.qualityValue ).toBe( 80 )
    })
  
    it('shoud maintaner its init values per six days for items', () => {
      const items = [new SulfurasItem({ name: "Sulfuras, Hand of Ragnaros", sellIn: 0, quality: 80})];
      const { updatedItems } = passDays(items, 6)
  
      expect( updatedItems.at(0)?.sellInValue ).toBe( 0 )
      expect( updatedItems.at(0)?.qualityValue ).toBe( 80 )
    })
  
    it('shoud maintaner its init values per eight days for items', () => {
      const items = [new SulfurasItem({ name: "Sulfuras, Hand of Ragnaros", sellIn: 0, quality: 80})];
      const { updatedItems } = passDays(items, 8)
  
      expect( updatedItems.at(0)?.sellInValue ).toBe( 0 )
      expect( updatedItems.at(0)?.qualityValue ).toBe( 80 )
    })

    it('shoud maintaner its init values per ten days for items', () => {
      const items = [new SulfurasItem({ name: "Sulfuras, Hand of Ragnaros", sellIn: 0, quality: 80})];
      const { updatedItems } = passDays(items, 10)
  
      expect( updatedItems.at(0)?.sellInValue ).toBe( 0 )
      expect( updatedItems.at(0)?.qualityValue ).toBe( 80 )
    })

    it('shoud maintaner its init values per twelve days for items', () => {
      const items = [new SulfurasItem({ name: "Sulfuras, Hand of Ragnaros", sellIn: 0, quality: 80})];
      const { updatedItems } = passDays(items, 12)
  
      expect( updatedItems.at(0)?.sellInValue ).toBe( 0 )
      expect( updatedItems.at(0)?.qualityValue ).toBe( 80 )
    })

    it('shoud maintaner its init values per fourteen days for items', () => {
      const items = [new SulfurasItem({ name: "Sulfuras, Hand of Ragnaros", sellIn: 0, quality: 80})];
      const { updatedItems } = passDays(items, 14)
  
      expect( updatedItems.at(0)?.sellInValue ).toBe( 0 )
      expect( updatedItems.at(0)?.qualityValue ).toBe( 80 )
    })

    it('shoud maintaner its init values per fifty two days for items', () => {
      const items = [new SulfurasItem({ name: "Sulfuras, Hand of Ragnaros", sellIn: 0, quality: 80})];
      const { updatedItems } = passDays(items, 52)
  
      expect( updatedItems.at(0)?.sellInValue ).toBe( 0 )
      expect( updatedItems.at(0)?.qualityValue ).toBe( 80 )
    })

    it('shoud maintaner its init values per one hundred two days for items', () => {
      const items = [new SulfurasItem({ name: "Sulfuras, Hand of Ragnaros", sellIn: 0, quality: 80})];
      const { updatedItems } = passDays(items, 102)
  
      expect( updatedItems.at(0)?.sellInValue ).toBe( 0 )
      expect( updatedItems.at(0)?.qualityValue ).toBe( 80 )
    })
  })

  describe('**Sulfuras, Hand of Ragnaros**', () => {
    it('shoud maintaner its init values per two days for items', () => {
      const items = [new SulfurasItem({ name: "Sulfuras, Hand of Ragnaros", sellIn: -1, quality: 80})];
      const { updatedItems } = passDays(items, 2)
  
      expect( updatedItems.at(0)?.sellInValue ).toBe( -1 )
      expect( updatedItems.at(0)?.qualityValue ).toBe( 80 )
    })
  
    it('shoud maintaner its init values per four days for items', () => {
      const items = [new SulfurasItem({ name: "Sulfuras, Hand of Ragnaros", sellIn: -1, quality: 80})];
      const { updatedItems } = passDays(items, 4)
  
      expect( updatedItems.at(0)?.sellInValue ).toBe( -1 )
      expect( updatedItems.at(0)?.qualityValue ).toBe( 80 )
    })
  
    it('shoud maintaner its init values per six days for items', () => {
      const items = [new SulfurasItem({ name: "Sulfuras, Hand of Ragnaros", sellIn: -1, quality: 80})];
      const { updatedItems } = passDays(items, 6)
  
      expect( updatedItems.at(0)?.sellInValue ).toBe( -1 )
      expect( updatedItems.at(0)?.qualityValue ).toBe( 80 )
    })
  
    it('shoud maintaner its init values per eight days for items', () => {
      const items = [new SulfurasItem({ name: "Sulfuras, Hand of Ragnaros", sellIn: -1, quality: 80})];
      const { updatedItems } = passDays(items, 8)
  
      expect( updatedItems.at(0)?.sellInValue ).toBe( -1 )
      expect( updatedItems.at(0)?.qualityValue ).toBe( 80 )
    })

    it('shoud maintaner its init values per ten days for items', () => {
      const items = [new SulfurasItem({ name: "Sulfuras, Hand of Ragnaros", sellIn: -1, quality: 80})];
      const { updatedItems } = passDays(items, 10)
  
      expect( updatedItems.at(0)?.sellInValue ).toBe( -1 )
      expect( updatedItems.at(0)?.qualityValue ).toBe( 80 )
    })

    it('shoud maintaner its init values per twelve days for items', () => {
      const items = [new SulfurasItem({ name: "Sulfuras, Hand of Ragnaros", sellIn: -1, quality: 80})];
      const { updatedItems } = passDays(items, 12)
  
      expect( updatedItems.at(0)?.sellInValue ).toBe( -1 )
      expect( updatedItems.at(0)?.qualityValue ).toBe( 80 )
    })

    it('shoud maintaner its init values per fourteen days for items', () => {
      const items = [new SulfurasItem({ name: "Sulfuras, Hand of Ragnaros", sellIn: -1, quality: 80})];
      const { updatedItems } = passDays(items, 14)
  
      expect( updatedItems.at(0)?.sellInValue ).toBe( -1 )
      expect( updatedItems.at(0)?.qualityValue ).toBe( 80 )
    })

    it('shoud maintaner its init values per fifty two days for items', () => {
      const items = [new SulfurasItem({ name: "Sulfuras, Hand of Ragnaros", sellIn: -1, quality: 80})];
      const { updatedItems } = passDays(items, 52)
  
      expect( updatedItems.at(0)?.sellInValue ).toBe( -1 )
      expect( updatedItems.at(0)?.qualityValue ).toBe( 80 )
    })

    it('shoud maintaner its init values per one hundred two days for items', () => {
      const items = [new SulfurasItem({ name: "Sulfuras, Hand of Ragnaros", sellIn: -1, quality: 80})];
      const { updatedItems } = passDays(items, 102)
  
      expect( updatedItems.at(0)?.sellInValue ).toBe( -1 )
      expect( updatedItems.at(0)?.qualityValue ).toBe( 80 )
    })
  })

  describe('**Backstage passes to a TAFKAL80ETC concert**', () => {
    it('shoud decrease sellIn and increase quality per two days for items', () => {
      const items = [new BackstagePassItem({ name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 12, quality: 4})];
      const { updatedItems } = passDays(items, 2)
  
      expect( updatedItems.at(0)?.sellInValue ).toBe( 10 )
      expect( updatedItems.at(0)?.qualityValue ).toBe( 6 )
    })
  
    it('shoud decrease sellIn and increase quality per four days for items', () => {
      const items = [new BackstagePassItem({ name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 12, quality: 4})];
      const { updatedItems } = passDays(items, 4)
  
      expect( updatedItems.at(0)?.sellInValue ).toBe( 8 )
      expect( updatedItems.at(0)?.qualityValue ).toBe( 10 )
    })
  
    it('shoud decrease sellIn and doble increase quality per six days for items', () => {
  const items = [new BackstagePassItem({ name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 12, quality: 4})];
      const { updatedItems } = passDays(items, 6)
  
      expect( updatedItems.at(0)?.sellInValue ).toBe( 6 )
      expect( updatedItems.at(0)?.qualityValue ).toBe( 14 )
    })
  
    it('shoud decrease sellIn and quitople increase quality per eight days for items', () => {
      const items = [new BackstagePassItem({ name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 12, quality: 4})];
      const { updatedItems } = passDays(items, 8)
  
      expect( updatedItems.at(0)?.sellInValue ).toBe( 4 )
      expect( updatedItems.at(0)?.qualityValue ).toBe( 19 )
    })

    it('shoud decrease sellIn and quitople increase quality per ten days for items', () => {
      const items = [new BackstagePassItem({ name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 12, quality: 4})];
      const { updatedItems } = passDays(items, 10)
  
      expect( updatedItems.at(0)?.sellInValue ).toBe( 2 )
      expect( updatedItems.at(0)?.qualityValue ).toBe( 25 )
    })

    it('shoud decrease sellIn and quitople increase quality per twelve days for items', () => {
      const items = [new BackstagePassItem({ name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 12, quality: 4})];
      const { updatedItems } = passDays(items, 12)
  
      expect( updatedItems.at(0)?.sellInValue ).toBe( 0 )
      expect( updatedItems.at(0)?.qualityValue ).toBe( 31 )
    })

    it('shoud set in zero quality when sellIn to be negative. fourteen days', () => {
      const items = [new BackstagePassItem({ name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 12, quality: 4})];
      const { updatedItems } = passDays(items, 14)
  
      expect( updatedItems.at(0)?.sellInValue ).toBe( -2 )
      expect( updatedItems.at(0)?.qualityValue ).toBe( 0 )
    })

    it('shoud set in zero quality when sellIn to be negative. fifty two days', () => {
      const items = [new BackstagePassItem({ name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 12, quality: 4})];
      const { updatedItems } = passDays(items, 52)
  
      expect( updatedItems.at(0)?.sellInValue ).toBe( -40 )
      expect( updatedItems.at(0)?.qualityValue ).toBe( 0 )
    })

    it('shoud set in zero quality when sellIn to be negative. One hundred two days', () => {
      const items = [new BackstagePassItem({ name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 12, quality: 4})];
      const { updatedItems } = passDays(items, 102)
  
      expect( updatedItems.at(0)?.sellInValue ).toBe( -90 )
      expect( updatedItems.at(0)?.qualityValue ).toBe( 0 )
    })
  })
});
