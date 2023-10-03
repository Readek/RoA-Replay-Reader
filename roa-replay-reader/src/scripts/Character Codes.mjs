const characterCodes = {
    1 : "Random",
    2 : "Zetterburn",
    3 : "Orcane",
    4 : "Wrastor",
    5 : "Kragg",
    6 : "Forsburn",
    7 : "Maypul",
    8 : "Absa",
    9 : "Etalus",
    10 : "Ori and Sein",
    11 : "Ranno",
    12 : "Clairen",
    13 : "Sylvanos",
    14 : "Elliana",
    15 : "Shovel Knight",
    16 : "Mollo",
    17 : "Hodan",
    18 : "Pomme",
    19 : "Olympia"
}

/**
 * Translates a character code to its name
 * @param {Number} code - Character code
 * @returns {String} Character name
 */
export function characterCodeToName(code) {
    
    // removes leading 0's
    code = Number(code);

    if (characterCodes[code]) {
        return characterCodes[code];
    } else {
        return "Unknown Character"
    }

}