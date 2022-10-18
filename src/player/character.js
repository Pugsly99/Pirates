export default class PlayerPirate {
  constructor(characterName, selectedClass) {
    // - Basic Stats - //
    this.characterName = characterName;
    this.characterClass = selectedClass;

    this.currentLocation;

    this.health;
    this.hunger;
    this.thirst;

    // - Attributes - //
    this.maxHealth = 1000;
    this.strength = 0;
    this.precision = 0;
    this.intellect = 0;
    this.speed = 0;

    // - Inventory - //
    this.bag = [];

    // - Clothing  - //
    this.clothingHead = [];
    this.clothingChest = [];
    this.clothingLegs = [];
    this.clothingFeet = [];

    this.protectionTotal = 0;

    // - Jewelry - //
    this.neck;

    this.leftHandPinkyFinger = [];
    this.leftHandRingFinger = [];
    this.leftHandMiddleFinger = [];
    this.leftHandPointerFinger = [];
    this.leftHandThumbFinger = [];

    this.rightHandPinkyFinger = [];
    this.rightHandRingFinger = [];
    this.rightHandMiddleFinger = [];
    this.rightHandPointerFinger = [];
    this.rightHandThumbFinger = [];

    // - Weapons - //
    this.equippedMainHand = [];
    this.equippedOffHand = [];
    this.holster = [];

    this.pet = [];

    // - Currency - //
    this.bronze = 0;
    this.silver = 0;
    this.gold = 0;
    this.story = 0;
  }
}
