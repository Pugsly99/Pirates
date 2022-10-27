class Loot {
  constructor(id, description, tier) {
    this.id = id;
    this.description = description;
    this.tier = tier;
  }
}

/* 
There will be tiers of loot that will help decide what can be generated within a give chest/area
Tiers in this order...
  #1 - Imperial 
  #2 - Exceedingly Rare
  #3 - Rare 
  #4 - Uncommon
  #5 - Common 

*/
