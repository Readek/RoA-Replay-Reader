import { stageCode, stageCodeToName } from "./Stage Codes.mjs";

/**
 * Reads a .roa replay file and parses its contents
 * @param {String} file - The big ass replay file
 */
export function readReplayFile(file) {

    const replayData = {};

    // get an array with each line
    const fileLines = file.split("\n");
    let playerCount = 0;
   
    // read each line individually
    for (let i = 0; i < fileLines.length; i++) {
        
        if (i == 0) { // line 1 - game info

            
            // game version
            const gameVer = fileLines[i].substring(1, 7);
            replayData.version = gameVer.substring(0, 1)
                + "." + gameVer.substring(1, 2)
                + "." + parseInt(gameVer.substring(2, 4))
                + "." + parseInt(gameVer.substring(4));
            

            // date of recording (hh:mm:ss DD.MM.YYYY)
            const repDate = fileLines[i].substring(7, 21);
            replayData.date = repDate.substring(0, 2)
                + ":" + repDate.substring(2, 4)
                + ":" + repDate.substring(4, 6)
                + " " + repDate.substring(6, 8)
                + "." + repDate.substring(8, 10)
                + "." + repDate.substring(10, 14)
            

            // match lenght
            // TODO decripto the codo
            const repLenght = fileLines[i].substring(196, 201);
            replayData.length = repLenght;


            // gamemode
            const repGM = fileLines[i].substring(202, 203);
            // 0 = local match
            // 1 = online casual
            // 2 = friendly match
            // 3 = ranked match
            if (repGM == 0) {
                replayData.gamemode = "Local Match";
            } else if (repGM == 1) {
                replayData.gamemode = "Casual Match";
            } else if (repGM == 2) {
                replayData.gamemode = "Online Match";
            } else {
                replayData.gamemode = "Ranked Match";
            }
            
            
            
        } else if (i == 1) { // line 2 - more game info


            // stage
            const stgType = fileLines[i].substring(0, 1);
            const stgCode = fileLines[i].substring(1, 3);
            
            const stageName = stageCodeToName(stgCode);
            replayData.stage = (Number(stgType) ? "Aether " : "") + stageName;

            // team match
            if (fileLines[i].substring(8, 9) > 0) {
                replayData.gamemode = "Team " + replayData.gamemode;
            }


            // abyss match
            if (fileLines[i].substring(13, 14) > 0) {
                replayData.gamemode = "Abyss " + replayData.gamemode;
            }


        } else {

            // we now need to identify how many players we have
            if (fileLines[i].length == 169 || fileLines[i].length == 170) {
                playerCount++;
            }

        }
        
    }

    replayData.player = [];
    let curLine = 2;

    // for each player
    for (let i = 0; i < playerCount; i++) {

        
        // create a player object
        const player = {};
        

        // steam username
        const username = fileLines[i + curLine].substring(1, 33).trimEnd();
        // player tag
        const tag = fileLines[i + curLine].substring(33, 39).trimEnd();

        // final player string
        player.playerName = username + " (" + tag + ")";


        // character
        const charSlot = fileLines[i + curLine].substring(39, 42);
        // TODO charslot to text
        player.character = charSlot;


        // skin
        const skinSlot = fileLines[i + curLine].substring(42, 44);
        // TODO skinslot to text?
        player.skin = skinSlot;


        // taunt slot, may be useful later
        const tauntCode = fileLines[i + curLine].substring(44, 46);


        // skin color code!
        const skinCode = fileLines[i + curLine].substring(56, 106).trimEnd();
        // add in the "-"'s in the code
        player.skinCode = skinCode.match(/.{1,4}/g).join("-");


        // win count
        player.wins = fileLines[i + curLine].substring(127, 129).trimStart();


        // add player to the final object
        replayData.player.push(player);


        // next player will be 2 lines below, or 3 lines if player is workshop
        const isWorkshop = Number(fileLines[i + curLine].substring(110, 111))
        curLine += isWorkshop ? 2 : 1;

    }

    return replayData;

}

