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
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach(item => {
      const isAgedBrie = item.name === 'Aged Brie';
      const isBackstagePass = item.name === 'Backstage passes to a TAFKAL80ETC concert';
      const isSulfuras = item.name === 'Sulfuras, Hand of Ragnaros';
      const isConjured = item.name === 'Conjured Mana Cake';

      if (isSulfuras) return;

      let qualityDecrease = item.sellIn <= 0 ? 2 : 1;

      if (isConjured) {
        qualityDecrease = qualityDecrease * 2;
      } else if (isAgedBrie) {
        qualityDecrease = -qualityDecrease;
      } else if (isBackstagePass) {
        if (item.sellIn <= 0) {
          qualityDecrease = item.quality;
        } else if (item.sellIn <= 5) {
          qualityDecrease = -3;
        } else if (item.sellIn <= 10) {
          qualityDecrease = -2;
        } else {
          qualityDecrease = -1;
        }
      }

      // 50 max, 0 min
      item.quality = Math.min(50, Math.max(0, item.quality - qualityDecrease));
      item.sellIn -= 1;
    });

    return this.items;
  }
}
