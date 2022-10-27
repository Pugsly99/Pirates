class Clothing {
  constructor(id, type, name, size, protection, grade, value, weight) {
    this.id = id;
    this.type = type;
    this.name = name;
    this.size = size;
    this.protection = protection;
    this.grade = grade;
    this.value = value;
    this.weight = weight;
  }
}

let testClothing = new Clothing();

/* - Clothing Grade System -

    Clothing will be found generated at a presentage of 'Grade/%' 
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

/* - Clothing Movement System -

    Clothing will have a Movement percentage that effects dodge chances. 
    large = 60% less likely 
    Medium = 40% less likely 
    Small = 20% less likely 
    Tiny = 10% less likely 
  
*/

/* --- Functions --- */

// Large Clothing Generate //
function generateLargeClothing() {}

// Medium Clothing Generate //
function generateMediumClothing() {}

// Small Clothing Generate //
function generateSmallClothing() {}

// Tiny Clothing Generate //
function generateTinyClothing() {}

/* --- Clothing Arrays --- */

// Large Clothing Only //
class LargeClothing {
  constructor() {
    this.Clothing = [];
  }
}

// Medium Clothing Only //
class MediumClothing {
  constructor() {
    this.Clothing = [];
  }
}

// Small Clothing Only //
class SmallClothing {
  constructor() {
    this.Clothing = [];
  }
}

// Tiny Clothing Only //
class TinyClothing {
  constructor() {
    this.Clothing = [];
  }
}
