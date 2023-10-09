import { GameInfoData } from "./GameInfoData"

export function ReplayDataInfo({fileData: replayData}) {

    const playerRows = [];
    let playerCount = 0;
    const playerColors = ["#ed1c23", "#00b7ef", "#ffa3b1", "#a8e61d"];
    if (replayData.player) {
        replayData.player.forEach(player => {
            playerRows.push(
    
                <div className="playerInfo">
    
                    <div 
                        className="playerTitle"
                        style={{borderBottomColor: playerColors[playerCount]}}
                    >
                        Player {playerCount + 1}
                    </div>

                    <div className="infoRow">
                        <GameInfoData value={player.playerName} tooltip="Steam username + tag"/>
                        <GameInfoData title="Win Count:" value={player.wins}/>
                    </div>

                    <div className="infoRow">
                        <GameInfoData 
                            value={player.character}
                            img={player.charImg}
                            tooltip={"Character"}
                        />
                        <GameInfoData
                            value={player.skin}
                            tooltip={"Skin"}
                        />
                    </div>
                    
                    <GameInfoData value={player.skinCode}/>
    
                </div>
    
            )
            playerCount++;
        });
    }
    
    
    return(

        <div className="dataDiv">
            
            <div className="gameInfoDiv">

                <GameInfoData value={replayData.gamemode}/>
                <GameInfoData value={replayData.stage} img={replayData.stageImg} tooltip="Stage"/>
                <GameInfoData value={replayData.length} img='/images/Icons/Time.png' tooltip="Match Length"/>
                <GameInfoData value={replayData.date} tooltip="Date of recording"/>
                <GameInfoData title="Version" value={replayData.version} tooltip="Game version"/>
                
            </div>


            <div className="playerInfoDiv">

                {playerRows}

            </div>

        </div>

    )

}