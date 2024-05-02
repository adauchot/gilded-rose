import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  // Common items
  it('should decrease quality of item when sell date is not passed', () => {
    const gildedRose = new GildedRose([new Item('Whatever', 5, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(9);
  });

  it('should decrease quality of item when sell date is passed', () => {
    const gildedRose = new GildedRose([new Item('Whatever', 0, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(8);
  });

  it('should decrease sellin by 1 for normal items', () => {
    const gildedRose = new GildedRose([new Item('Whatever', 5, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(4);
  });

  // Backstage item
  it('should increase quality of backstage passes by 1 when sell date greater than 10', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 11, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(1);
  });

  it('should increase quality of backstage passes by 2 when sell date lower or equals to 10 and greater than 5', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(2);
  });

  it('should increase quality of backstage passes by 3 when sell date lower or equals to 5 and greater than 0', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(3);
  });

  it('should set quality of backstage passes to 0 when sell date is 0', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  // Age Brie item
  it('should increase quality of aged brie when sell date is passed', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(2);
  });

  it('should increase quality of aged brie when sell date is not passed', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 5, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(1);
  });

  // Sulfuras item
  it('should not decrease sellin when item is Sulfuras', () => {
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 5, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(5);
  });

  it('should not update the quality of Sulfuras', () => {
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 5, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(80);
  });

  it('should decrease quality of conjured items by 2 when sell date is not passed', () => {
    const gildedRose = new GildedRose([new Item('Conjured Mana Cake', 5, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(8);
  });

  it('should decrease quality of conjured items by 4 when sell date is passed', () => {
    const gildedRose = new GildedRose([new Item('Conjured Mana Cake', 0, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(6);
  });
});
