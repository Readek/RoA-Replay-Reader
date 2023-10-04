const stageCodes = {
    1 : "Treetop Lodge",
    2 : "Fire Capital",
    3 : "Air Armada",
    4 : "Rock Wall",
    5 : "Merchant Port",
    6 : "Treetop Lodge",
    7 : "Blazing Hideout",
    8 : "Tower of Heaven",
    9 : "Tempest Peak",
    10 : "Frozen Fortress",
    11 : "Aethereal Gates",
    12 : "The Endless Abyss",
    
    14 : "The CEO Ring",
    15 : "The Spirit Tree",
    16 : "The Tutorial Grid?",
    17 : "NEO Fire Capital",
    18 : "The Swampy Estuary",
    19 : "The Forest Floor",
    20 : "Julesvale",
    21 : "Troupple Pond",
    22 : "Practice Room",
    23 : "Aether High",
    24 : "Pridemoor Keep",
    25 : "Frozen Gates",
    26 : "The Tutorial Grid",
    27 : "The RoA Ring",
    
    29 : "Tetherball Court",

    32 : "NEO Blazing Rail",
    33 : "Highdive Hideaway",
    34 : "NEO Julesvale",
    35 : "Crystal Oasis",
    36 : "Diamond Grove",
    37 : "Badger Co. Mines"
}

/**
 * Translates a stage code to its name
 * @param {Number} code - Stage code
 * @returns {String} Stage name
 */
export function stageCodeToName(code) {
    
    // removes leading 0's
    code = Number(code);

    if (stageCodes[code]) {
        return stageCodes[code];
    }

    return "Unknown Stage";

}
