import { Item, GildedRose } from '@/gilded-rose';

const passDays = (items: Item[], daysPassed: number) => {
  const gildedRose = new GildedRose(JSON.parse(JSON.stringify(items)));

  for (let i = 0; i < daysPassed; i++) {
    gildedRose.updateQuality();
  }
  return { updatedItems: gildedRose.items }
}

describe('Gilded Rose', () => {

  // "Elixir of the Mongoose" has same flow
  describe('**+5 Dexterity Vest**', () => {
    it('shoud decrease per two days for items', () => {
      const items = [new Item("+5 Dexterity Vest", 4, 8)];
      const { updatedItems } = passDays(items, 2)
  
      expect( updatedItems.at(0)?.sellIn ).toBe( 2 )
      expect( updatedItems.at(0)?.quality ).toBe( 6 )
    })
  
    it('shoud decrease per four days for items', () => {
      const items = [new Item("+5 Dexterity Vest", 4, 8)];
      const { updatedItems } = passDays(items, 4)
  
      expect( updatedItems.at(0)?.sellIn ).toBe( 0 )
      expect( updatedItems.at(0)?.quality ).toBe( 4 )
    })
  
    it('shoud decrease per six days for items', () => {
      const items = [new Item("+5 Dexterity Vest", 4, 8)];
      const { updatedItems } = passDays(items, 6)
  
      expect( updatedItems.at(0)?.sellIn ).toBe( -2 )
      expect( updatedItems.at(0)?.quality ).toBe( 0 )
    })
  
    it('shoud decrease per eight days for items and quality must be zero', () => {
      const items = [new Item("+5 Dexterity Vest", 4, 8)];
      const { updatedItems } = passDays(items, 8)
  
      expect( updatedItems.at(0)?.sellIn ).toBe( -4 )
      expect( updatedItems.at(0)?.quality ).toBe( 0 )
    })

    it('shoud decrease per ten days for items and quality must be zero', () => {
      const items = [new Item("+5 Dexterity Vest", 4, 8)];
      const { updatedItems } = passDays(items, 10)
  
      expect( updatedItems.at(0)?.sellIn ).toBe( -6 )
      expect( updatedItems.at(0)?.quality ).toBe( 0 )
    })

    it('shoud decrease per twelve days for items and quality must be zero', () => {
      const items = [new Item("+5 Dexterity Vest", 4, 8)];
      const { updatedItems } = passDays(items, 12)
  
      expect( updatedItems.at(0)?.sellIn ).toBe( -8 )
      expect( updatedItems.at(0)?.quality ).toBe( 0 )
    })

    it('shoud decrease per fourteen days for items and quality must be zero', () => {
      const items = [new Item("+5 Dexterity Vest", 4, 8)];
      const { updatedItems } = passDays(items, 14)
  
      expect( updatedItems.at(0)?.sellIn ).toBe( -10 )
      expect( updatedItems.at(0)?.quality ).toBe( 0 )
    })

    it('shoud decrease per fifty two days for items and quality must be zero', () => {
      const items = [new Item("+5 Dexterity Vest", 4, 8)];
      const { updatedItems } = passDays(items, 52)
  
      expect( updatedItems.at(0)?.sellIn ).toBe( -48 )
      expect( updatedItems.at(0)?.quality ).toBe( 0 )
    })

    it('shoud decrease per one hundred two days for items and quality must be zero', () => {
      const items = [new Item("+5 Dexterity Vest", 4, 8)];
      const { updatedItems } = passDays(items, 102)
  
      expect( updatedItems.at(0)?.sellIn ).toBe( -98 )
      expect( updatedItems.at(0)?.quality ).toBe( 0 )
    })
  })

  describe('**Aged Brie**', () => {
    it('shoud decrease sellIn and increment quality per two days for items', () => {
      const items = [new Item("Aged Brie", 2, 0)];
      const { updatedItems } = passDays(items, 2)
  
      expect( updatedItems.at(0)?.sellIn ).toBe( 0 )
      expect( updatedItems.at(0)?.quality ).toBe( 2 )
    })
  
    it('shoud decrease sellIn and increment quality per four days for items', () => {
      const items = [new Item("Aged Brie", 2, 0)];
      const { updatedItems } = passDays(items, 4)
  
      expect( updatedItems.at(0)?.sellIn ).toBe( -2 )
      expect( updatedItems.at(0)?.quality ).toBe( 6 )
    })
  
    it('shoud decrease sellIn and increment quality per six days for items', () => {
      const items = [new Item("Aged Brie", 2, 0)];
      const { updatedItems } = passDays(items, 6)
  
      expect( updatedItems.at(0)?.sellIn ).toBe( -4 )
      expect( updatedItems.at(0)?.quality ).toBe( 10 )
    })
  
    it('shoud decrease sellIn and double increment quality per eight days for items', () => {
      const items = [new Item("Aged Brie", 2, 0)];
      const { updatedItems } = passDays(items, 8)
  
      expect( updatedItems.at(0)?.sellIn ).toBe( -6 )
      expect( updatedItems.at(0)?.quality ).toBe( 14 )
    })

    it('shoud decrease sellIn and double increment quality per ten days for items', () => {
      const items = [new Item("Aged Brie", 2, 0)];
      const { updatedItems } = passDays(items, 10)
  
      expect( updatedItems.at(0)?.sellIn ).toBe( -8 )
      expect( updatedItems.at(0)?.quality ).toBe( 18 )
    })

    it('shoud decrease sellIn and double increment quality per twelve days for items', () => {
      const items = [new Item("Aged Brie", 2, 0)];
      const { updatedItems } = passDays(items, 12)
  
      expect( updatedItems.at(0)?.sellIn ).toBe( -10 )
      expect( updatedItems.at(0)?.quality ).toBe( 22 )
    })

    it('shoud decrease sellIn and double increment quality per fourteen days for items', () => {
      const items = [new Item("Aged Brie", 2, 0)];
      const { updatedItems } = passDays(items, 14)
  
      expect( updatedItems.at(0)?.sellIn ).toBe( -12 )
      expect( updatedItems.at(0)?.quality ).toBe( 26 )
    })

    it('shoud decrease sellIn and double increment quality per fifty two days for items. Quality can not be greaten than 50', () => {
      const items = [new Item("Aged Brie", 2, 0)];
      const { updatedItems } = passDays(items, 52)
  
      expect( updatedItems.at(0)?.sellIn ).toBe( -50 )
      expect( updatedItems.at(0)?.quality ).toBe( 50 )
    })

    it('shoud decrease sellIn and double increment quality per one hundred two two days for items. Quality can not be greaten than 50', () => {
      const items = [new Item("Aged Brie", 2, 0)];
      const { updatedItems } = passDays(items, 102)
  
      expect( updatedItems.at(0)?.sellIn ).toBe( -100 )
      expect( updatedItems.at(0)?.quality ).toBe( 50 )
    })
  })

  describe('**Sulfuras, Hand of Ragnaros**', () => {
    it('shoud maintaner its init values per two days for items', () => {
      const items = [new Item("Sulfuras, Hand of Ragnaros", 0, 80)];
      const { updatedItems } = passDays(items, 2)
  
      expect( updatedItems.at(0)?.sellIn ).toBe( 0 )
      expect( updatedItems.at(0)?.quality ).toBe( 80 )
    })
  
    it('shoud maintaner its init values per four days for items', () => {
      const items = [new Item("Sulfuras, Hand of Ragnaros", 0, 80)];
      const { updatedItems } = passDays(items, 4)
  
      expect( updatedItems.at(0)?.sellIn ).toBe( 0 )
      expect( updatedItems.at(0)?.quality ).toBe( 80 )
    })
  
    it('shoud maintaner its init values per six days for items', () => {
      const items = [new Item("Sulfuras, Hand of Ragnaros", 0, 80)];
      const { updatedItems } = passDays(items, 6)
  
      expect( updatedItems.at(0)?.sellIn ).toBe( 0 )
      expect( updatedItems.at(0)?.quality ).toBe( 80 )
    })
  
    it('shoud maintaner its init values per eight days for items', () => {
      const items = [new Item("Sulfuras, Hand of Ragnaros", 0, 80)];
      const { updatedItems } = passDays(items, 8)
  
      expect( updatedItems.at(0)?.sellIn ).toBe( 0 )
      expect( updatedItems.at(0)?.quality ).toBe( 80 )
    })

    it('shoud maintaner its init values per ten days for items', () => {
      const items = [new Item("Sulfuras, Hand of Ragnaros", 0, 80)];
      const { updatedItems } = passDays(items, 10)
  
      expect( updatedItems.at(0)?.sellIn ).toBe( 0 )
      expect( updatedItems.at(0)?.quality ).toBe( 80 )
    })

    it('shoud maintaner its init values per twelve days for items', () => {
      const items = [new Item("Sulfuras, Hand of Ragnaros", 0, 80)];
      const { updatedItems } = passDays(items, 12)
  
      expect( updatedItems.at(0)?.sellIn ).toBe( 0 )
      expect( updatedItems.at(0)?.quality ).toBe( 80 )
    })

    it('shoud maintaner its init values per fourteen days for items', () => {
      const items = [new Item("Sulfuras, Hand of Ragnaros", 0, 80)];
      const { updatedItems } = passDays(items, 14)
  
      expect( updatedItems.at(0)?.sellIn ).toBe( 0 )
      expect( updatedItems.at(0)?.quality ).toBe( 80 )
    })

    it('shoud maintaner its init values per fifty two days for items', () => {
      const items = [new Item("Sulfuras, Hand of Ragnaros", 0, 80)];
      const { updatedItems } = passDays(items, 52)
  
      expect( updatedItems.at(0)?.sellIn ).toBe( 0 )
      expect( updatedItems.at(0)?.quality ).toBe( 80 )
    })

    it('shoud maintaner its init values per one hundred two days for items', () => {
      const items = [new Item("Sulfuras, Hand of Ragnaros", 0, 80)];
      const { updatedItems } = passDays(items, 102)
  
      expect( updatedItems.at(0)?.sellIn ).toBe( 0 )
      expect( updatedItems.at(0)?.quality ).toBe( 80 )
    })
  })

  describe('**Sulfuras, Hand of Ragnaros**', () => {
    it('shoud maintaner its init values per two days for items', () => {
      const items = [new Item("Sulfuras, Hand of Ragnaros", -1, 80)];
      const { updatedItems } = passDays(items, 2)
  
      expect( updatedItems.at(0)?.sellIn ).toBe( -1 )
      expect( updatedItems.at(0)?.quality ).toBe( 80 )
    })
  
    it('shoud maintaner its init values per four days for items', () => {
      const items = [new Item("Sulfuras, Hand of Ragnaros", -1, 80)];
      const { updatedItems } = passDays(items, 4)
  
      expect( updatedItems.at(0)?.sellIn ).toBe( -1 )
      expect( updatedItems.at(0)?.quality ).toBe( 80 )
    })
  
    it('shoud maintaner its init values per six days for items', () => {
      const items = [new Item("Sulfuras, Hand of Ragnaros", -1, 80)];
      const { updatedItems } = passDays(items, 6)
  
      expect( updatedItems.at(0)?.sellIn ).toBe( -1 )
      expect( updatedItems.at(0)?.quality ).toBe( 80 )
    })
  
    it('shoud maintaner its init values per eight days for items', () => {
      const items = [new Item("Sulfuras, Hand of Ragnaros", -1, 80)];
      const { updatedItems } = passDays(items, 8)
  
      expect( updatedItems.at(0)?.sellIn ).toBe( -1 )
      expect( updatedItems.at(0)?.quality ).toBe( 80 )
    })

    it('shoud maintaner its init values per ten days for items', () => {
      const items = [new Item("Sulfuras, Hand of Ragnaros", -1, 80)];
      const { updatedItems } = passDays(items, 10)
  
      expect( updatedItems.at(0)?.sellIn ).toBe( -1 )
      expect( updatedItems.at(0)?.quality ).toBe( 80 )
    })

    it('shoud maintaner its init values per twelve days for items', () => {
      const items = [new Item("Sulfuras, Hand of Ragnaros", -1, 80)];
      const { updatedItems } = passDays(items, 12)
  
      expect( updatedItems.at(0)?.sellIn ).toBe( -1 )
      expect( updatedItems.at(0)?.quality ).toBe( 80 )
    })

    it('shoud maintaner its init values per fourteen days for items', () => {
      const items = [new Item("Sulfuras, Hand of Ragnaros", -1, 80)];
      const { updatedItems } = passDays(items, 14)
  
      expect( updatedItems.at(0)?.sellIn ).toBe( -1 )
      expect( updatedItems.at(0)?.quality ).toBe( 80 )
    })

    it('shoud maintaner its init values per fifty two days for items', () => {
      const items = [new Item("Sulfuras, Hand of Ragnaros", -1, 80)];
      const { updatedItems } = passDays(items, 52)
  
      expect( updatedItems.at(0)?.sellIn ).toBe( -1 )
      expect( updatedItems.at(0)?.quality ).toBe( 80 )
    })

    it('shoud maintaner its init values per one hundred two days for items', () => {
      const items = [new Item("Sulfuras, Hand of Ragnaros", -1, 80)];
      const { updatedItems } = passDays(items, 102)
  
      expect( updatedItems.at(0)?.sellIn ).toBe( -1 )
      expect( updatedItems.at(0)?.quality ).toBe( 80 )
    })
  })

  describe('**Backstage passes to a TAFKAL80ETC concert**', () => {
    it('shoud decrease sellIn and increase quality per two days for items', () => {
      const items = [new Item("Backstage passes to a TAFKAL80ETC concert", 12, 4)];
      const { updatedItems } = passDays(items, 2)
  
      expect( updatedItems.at(0)?.sellIn ).toBe( 10 )
      expect( updatedItems.at(0)?.quality ).toBe( 6 )
    })
  
    it('shoud decrease sellIn and increase quality per four days for items', () => {
      const items = [new Item("Backstage passes to a TAFKAL80ETC concert", 12, 4)];
      const { updatedItems } = passDays(items, 4)
  
      expect( updatedItems.at(0)?.sellIn ).toBe( 8 )
      expect( updatedItems.at(0)?.quality ).toBe( 10 )
    })
  
    it('shoud decrease sellIn and doble increase quality per six days for items', () => {
  const items = [new Item("Backstage passes to a TAFKAL80ETC concert", 12, 4)];
      const { updatedItems } = passDays(items, 6)
  
      expect( updatedItems.at(0)?.sellIn ).toBe( 6 )
      expect( updatedItems.at(0)?.quality ).toBe( 14 )
    })
  
    it('shoud decrease sellIn and quitople increase quality per eight days for items', () => {
      const items = [new Item("Backstage passes to a TAFKAL80ETC concert", 12, 4)];
      const { updatedItems } = passDays(items, 8)
  
      expect( updatedItems.at(0)?.sellIn ).toBe( 4 )
      expect( updatedItems.at(0)?.quality ).toBe( 19 )
    })

    it('shoud decrease sellIn and quitople increase quality per ten days for items', () => {
      const items = [new Item("Backstage passes to a TAFKAL80ETC concert", 12, 4)];
      const { updatedItems } = passDays(items, 10)
  
      expect( updatedItems.at(0)?.sellIn ).toBe( 2 )
      expect( updatedItems.at(0)?.quality ).toBe( 25 )
    })

    it('shoud decrease sellIn and quitople increase quality per twelve days for items', () => {
      const items = [new Item("Backstage passes to a TAFKAL80ETC concert", 12, 4)];
      const { updatedItems } = passDays(items, 12)
  
      expect( updatedItems.at(0)?.sellIn ).toBe( 0 )
      expect( updatedItems.at(0)?.quality ).toBe( 31 )
    })

    it('shoud set in zero quality when sellIn to be negative. fourteen days', () => {
      const items = [new Item("Backstage passes to a TAFKAL80ETC concert", 12, 4)];
      const { updatedItems } = passDays(items, 14)
  
      expect( updatedItems.at(0)?.sellIn ).toBe( -2 )
      expect( updatedItems.at(0)?.quality ).toBe( 0 )
    })

    it('shoud set in zero quality when sellIn to be negative. fifty two days', () => {
      const items = [new Item("Backstage passes to a TAFKAL80ETC concert", 12, 4)];
      const { updatedItems } = passDays(items, 52)
  
      expect( updatedItems.at(0)?.sellIn ).toBe( -40 )
      expect( updatedItems.at(0)?.quality ).toBe( 0 )
    })

    it('shoud set in zero quality when sellIn to be negative. One hundred two days', () => {
      const items = [new Item("Backstage passes to a TAFKAL80ETC concert", 12, 4)];
      const { updatedItems } = passDays(items, 102)
  
      expect( updatedItems.at(0)?.sellIn ).toBe( -90 )
      expect( updatedItems.at(0)?.quality ).toBe( 0 )
    })
  })
});
