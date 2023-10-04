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
                        <GameInfoData value={player.character} img={player.charImg}/>
                        <GameInfoData value={player.skin}/>
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
                <GameInfoData value={replayData.stage} img={replayData.stageImg} />
                <GameInfoData value={replayData.length} img='/images/Icons/Time.png'/>
                <GameInfoData value={replayData.date}/>
                <GameInfoData title="Version" value={replayData.version}/>
                
            </div>


            <div className="playerInfoDiv">

                {playerRows}

            </div>

        </div>

    )

}