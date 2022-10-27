class Weapon {
  constructor(id, type, name, size, damage, grade, value, weight) {
    this.id = id;
    this.type = type;
    this.name = name;
    this.size = size;
    this.damage = damage;
    this.grade = grade;
    this.value = value;
    this.weight = weight;
  }
}

let testWeapon = new Weapon();

/* - Weapon Grade System -

    Weapons will be found generated at a presentage of 'Grade/%' 
    90 - 100% = Prestine 
    65 - 89% = Very Good
    35 - 64% = Good  
    10 - 34% = Fair 
    0 - 9% = Weak
    0% = Broken 

    Each grade effects the base value 
    Prestine - 130% Base Value
    Very Good - 115% Base Value
    Good - 100% Base Value 
    Fair - 75% Base Value 
    Weak - 50% Base Value 
    Broken - 15% Base Value 

*/

/* - Weapon Bloacking System -

    Weapons will have a block percentage that is relavent to the real life ability to protect ones self 
    large = 60%
    Medium = 40%
    Small = 20%
    Tiny = 10% 
  
*/

/* --- Functions --- */

// Large Weapon Generate //
function generateLargeWeapon() {}

// Medium Weapon Generate //
function generateMediumWeapon() {}

// Small Weapons Generate //
function generateSmallWeapon() {}

// Tiny Weapons Generate //
function generateTinyWeapon() {}

/* --- Weapon Arrays --- */

// Large Weapons Only //
class LargeWeapons {
  constructor() {
    this.weapons = [];
  }
}

// Medium Weapons Only //
class MediumWeapons {
  constructor() {
    this.weapons = [];
  }
}

// Small Weapons Only //
class SmallWeapons {
  constructor() {
    this.weapons = [];
  }
}

// Tiny Weapons Only //
class TinyWeapons {
  constructor() {
    this.weapons = [];
  }
}
