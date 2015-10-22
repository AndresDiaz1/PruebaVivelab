function Item(name, sell_in, quality) {
    this.name = name;
    this.sell_in = sell_in;
    this.quality = quality;
}

function updateQuality() {
    for (var i = 0; i < items.length; i++) {
        selectTypeOfItem(items[i]);
        reduceSellInValue(items[i]);
    }
}

function selectTypeOfItem(item) {
    if (item.name == 'Aged Brie') {
        calculateAgedBrieQuality(item);
    } else if ((item.name).indexOf('Backstage') >= 0) {
        calculateBackstagePassQuality(item);
    } else if ((item.name).indexOf('Conjured') >= 0) {
        calculateConjuredItemQuality(item);
    } else {
        reduceQualityValue(item);
    }
}

function calculateAgedBrieQuality(item) {
    item.quality = item.quality + 1;
    checkIfQualityIsAbove50(item);
}

function calculateBackstagePassQuality(item) {
    checkRemainingDays(item);
    checkIfQualityIsAbove50(item);
}

function checkRemainingDays(item) {
    if (item.sell_in > 10) {
        item.quality = item.quality + 1;
    } else if (item.sell_in <= 10 && item.sell_in >= 5) {
        item.quality = item.quality + 2;
    } else if (item.sell_in < 5 && item.sell_in > 0) {
        item.quality = item.quality + 3;
    } else if (item.sell_in == 0) {
        item.quality = 0;
    }
}

function calculateConjuredItemQuality(item) {
    item.quality = item.sell_in == 0 ? item.quality - 4 : item.quality - 2;
    checkNegativeQuality(item);
}

function checkIfQualityIsAbove50(item) {
    if (item.quality > 50) {
        item.quality = 50;
    }
}

function checkNegativeQuality(item) {
    if (item.quality <= 0) {
        item.quality = 0;
    }
}

function reduceSellInValue(item) {
    if (item.sell_in > 0) {
        item.sell_in = item.sell_in - 1;
    }
}

function reduceQualityValue(item) {
    if (item.name != "Sulfuras, Hand of Ragnaros") {
        item.quality = item.sell_in == 0 ? item.quality - 2 : item.quality - 1;
        checkNegativeQuality(item);
    }
}

var items = [];

items.push(new Item('+5 Dexterity Vest', 10, 20));
items.push(new Item('Conjured +5 Dexterity Vest', 10, 20));
items.push(new Item('Aged Brie', 2, 0));
items.push(new Item('Oxidian Sword', 2, 30));
items.push(new Item('Elixir of the Mongoose', 5, 7));
items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
items.push(new Item('Conjured Mana Cake', 3, 6));
items.push(new Item('Backstage passes to a FolkNTroll concert', 6, 20));
items.push(new Item('Conjured Mana Cake2', 0, 6));
items.push(new Item('Conjured Mana Pie', 0, 10));
