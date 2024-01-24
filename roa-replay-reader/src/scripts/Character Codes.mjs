const characterCodes = {
    1 : {
        name : "Random"
    },
    2 : {
        name : "Zetterburn",
        skin : {
            1 : "Blue",
            2 : "Red",
            3 : "Green",
            4 : "Grey",
            5 : "Purple",
            11 : "Champion",
            12 : "Excaliburn",
            15 : "Shine",
            16 : "Golden",
            17 : "LoA",
            19 : "Steampunk"
        },
    },
    3 : {
        name : "Orcane",
        skin : {
            1 : "Cyan",
            2 : "Red",
            3 : "Green",
            4 : "Grey",
            5 : "Purple",
            11 : "Golden",
            12 : "Summit",
            15 : "Pool Party",
            16 : "Champion",
            17 : "Steampunk",
            19 : "Grassroots"
        },
    },
    4 : {
        name : "Wrastor",
        skin : {
            1 : "Blue",
            2 : "Red",
            3 : "Green",
            4 : "Grey",
            5 : "Purple",
            11 : "Spangled",
            12 : "Champion",
            15 : "Bradshaw",
            16 : "Collegiate",
            17 : "Golden",
            19 : "Streetwave"
        },
    },
    5 : {
        name : "Kragg",
        skin : {
            1 : "Blue",
            2 : "Pink",
            3 : "Green",
            4 : "Grey",
            5 : "Purple",
            11 : "Summit",
            12 : "Champion",
            15 : "Burrito",
            16 : "Golden",
            17 : "Golden",
            19 : "Genesis",
            20 : "Pool Party"
        },
    },
    6 : {
        name : "Forsburn",
        skin : {
            1 : "Blue",
            2 : "Red",
            3 : "Green",
            4 : "White",
            5 : "Purple",
            11 : "Genesis",
            12 : "Heatwave",
            15 : "Champion",
            16 : "Dreamscape",
            17 : "LoA",
            19 : "Golden"
        },
    },
    7 : {
        name : "Maypul",
        skin : {
            1 : "Blue",
            2 : "Red",
            3 : "Yellow",
            4 : "Grey",
            5 : "Purple",
            11 : "Panda",
            12 : "Arcade",
            15 : "Ragnir",
            16 : "Golden",
            17 : "Champion",
            19 : "GoTE",
            20 : "Early to Bed"
        },
    },
    8 : {
        name : "Absa",
        skin : {
            1 : "Blue",
            2 : "Red",
            3 : "Green",
            4 : "Grey",
            5 : "Purple",
            11 : "Twitch",
            12 : "Champion",
            15 : "Penguin",
            16 : "LoA",
            17 : "Golden",
            19 : "Steampunk",
            20 : "High Roller"
        },
    },
    9 : {
        name : "Etalus",
        skin : {
            1 : "Cyan",
            2 : "Yellow",
            3 : "Green",
            4 : "Brown",
            5 : "Pink",
            11 : "Champion",
            12 : "Golden",
            15 : "Panda",
            16 : "Genesis",
            17 : "Pool Party",
        },
    },
    10 : {
        name : "Ori and Sein",
        skin : {
            1 : "Cyan",
            2 : "Red",
            3 : "Green",
            4 : "Dark",
            5 : "Pink",
            11 : "Infamous",
            12 : "Champion"
        },
    },
    11 : {
        name : "Ranno",
        skin : {
            1 : "Blue",
            2 : "Red",
            3 : "Green",
            4 : "Grey",
            5 : "Pink",
            11 : "Pool Party",
            12 : "Champion",
            15 : "Tuxedo",
            16 : "Golden",
            17 : "Infamous",
        },
    },
    12 : {
        name : "Clairen",
        skin : {
            1 : "Blue",
            2 : "Orange",
            3 : "Green",
            4 : "Purple",
            5 : "White",
            11 : "Genesis",
            12 : "Hero",
            15 : "Arcade",
            16 : "Infamous",
            17 : "Champion",
            19 : "Golden",
            20 : "Heat Wave",
        },
    },
    13 : {
        name : "Sylvanos",
        skin : {
            1 : "Blue",
            2 : "Red",
            3 : "Green",
            4 : "White",
            5 : "Purple",
            11 : "Genesis",
            12 : "Infamous",
            15 : "Golden",
            16 : "Champion",
            17 : "Steampunk",
        },
    },
    14 : {
        name : "Elliana",
        skin : {
            1 : "Blue",
            2 : "Red",
            3 : "Green",
            4 : "Grey",
            5 : "White",
            11 : "Arcade",
            12 : "Ayala",
            15 : "Infamous",
            16 : "On The Edge",
            17 : "Champion",
            19 : "Golden"
        },
    },
    15 : {
        name : "Shovel Knight",
        skin : {
            1 : "Cyan",
            2 : "Red",
            3 : "Green",
            4 : "Dark",
            5 : "Purple",
            11 : "Golden",
            12 : "Infamous",
            15 : "Champion"
        },
    },
    16 : {
        name : "Mollo",
        skin : {
            1 : "Blue",
            2 : "Red",
            3 : "Green",
            4 : "White",
            5 : "Pink",
            11 : "Champion",
            12 : "Arcade"
        },
    },
    17 : {
        name : "Hodan",
        skin : {
            1 : "Blue",
            2 : "Red",
            3 : "Green",
            4 : "Grey",
            5 : "Purple",
            11 : "Champion",
            12 : "Genesis",
        },
    },
    18 : {
        name : "Pomme",
        skin : {
            1 : "Blue",
            2 : "Red",
            3 : "Green",
            4 : "White",
            5 : "Purple",
            11 : "Champion",
            12 : "Pool Party"
        },
    },
    19 : {
        name : "Olympia",
        skin : {
            1 : "Blue",
            2 : "Red",
            3 : "Green",
            4 : "White",
            5 : "Dark Purple",
            11 : "Champion",
            12 : "Golden",
            15 : "Streetwave"
        },
    }
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
        return characterCodes[code].name;
    }

    return "Unknown Character"

}

/**
 * Translates a skin code to its name
 * @param {Number} charCode - Character code number
 * @param {Number} skinCode - Skin code number
 * @returns {String} Skin name
 */
export function skinCodeToName(charCode, skinCode) {

    // removes leading 0's
    charCode = Number(charCode);
    skinCode = Number(skinCode);

    // fixed skin slots
    if (skinCode == 0) {
        return "Default";
    } else if (skinCode == 6) {
        return "Seasonal";
    } else if (skinCode == 8 || skinCode == 9 || skinCode > 20) {
        return "Custom Skin";
    } else if (skinCode == 13) {
        return "Abyss";
    } else if (skinCode == 14) {
        return "Early Access";
    } else if (skinCode == 18) {
        return "Ranked";
    }
    
    if (characterCodes[charCode]) {
        if (characterCodes[charCode].skin[skinCode]) {
            return characterCodes[charCode].skin[skinCode];
        }
    }

    return "Unknown Skin";
    
}
