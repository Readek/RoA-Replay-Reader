import { GameInfoData } from "./GameInfoData"

export function ReplayDataInfo({fileData: replayData}) {

    const playerRows = [];
    if (replayData.player) {
        replayData.player.forEach(player => {
            playerRows.push(
    
                <div className="playerInfo">
    
                    <GameInfoData title="Username" value={player.username}/>
                    <GameInfoData title="Tag" value={player.tag}/>
                    <GameInfoData title="Character" value={player.character}/>
                    <GameInfoData title="Skin" value={player.skin}/>
                    <GameInfoData title="Skin Code" value={player.skinCode}/>
                    <GameInfoData title="Wins" value={player.wins}/>
    
                </div>
    
            )
        });
    }
    
    
    return(

        <div className="dataDiv">
            
            <div className="gameInfoDiv">

                <GameInfoData title="Version" value={replayData.version}/>
                <GameInfoData title="Date" value={replayData.date}/>
                <GameInfoData title="Gamemode" value={replayData.gamemode}/>
                <GameInfoData title="Stage" value={replayData.stage}/>
                <GameInfoData title="Match Type" value={replayData.matchType}/>
                <GameInfoData title="Duration" value={replayData.length}/>
                
            </div>


            <div className="playerInfoDiv">

                {playerRows}

            </div>

        </div>

    )

}