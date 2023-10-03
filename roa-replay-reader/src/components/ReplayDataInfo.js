import { GameInfoData } from "./GameInfoData"

export function ReplayDataInfo({fileData: replayData}) {

    const playerRows = [];
    if (replayData.player) {
        replayData.player.forEach(player => {
            playerRows.push(
    
                <div className="playerInfo">
    
                    <div className="infoRow">
                        <GameInfoData value={player.playerName}/>
                        <GameInfoData title="Win Count:" value={player.wins}/>
                    </div>

                    <div className="infoRow">
                        <GameInfoData value={player.character}/>
                        <GameInfoData title="Skin" value={player.skin}/>
                        <GameInfoData title="Taunt" value={player.taunt}/>
                    </div>
                    
                    <GameInfoData value={player.skinCode}/>
    
                </div>
    
            )
        });
    }
    
    
    return(

        <div className="dataDiv">
            
            <div className="gameInfoDiv">

                <GameInfoData value={replayData.gamemode}/>
                <GameInfoData value={replayData.stage}/>
                <GameInfoData title="Duration" value={replayData.length}/>
                <GameInfoData value={replayData.date}/>
                <GameInfoData title="Version" value={replayData.version}/>
                
            </div>


            <div className="playerInfoDiv">

                {playerRows}

            </div>

        </div>

    )

}