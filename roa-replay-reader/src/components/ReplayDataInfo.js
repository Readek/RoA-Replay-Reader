import { GameInfoData } from "./GameInfoData"

export function ReplayDataInfo() {
    
    return(

        <div className="dataDiv">
            
            <div className="gameInfoDiv">

                <GameInfoData title="Version"/>
                <GameInfoData title="Date"/>
                <GameInfoData title="Gamemode"/>
                <GameInfoData title="Stage"/>
                <GameInfoData title="Match Type"/>
                <GameInfoData title="Duration"/>
                
            </div>

            <div className="playerInfoDiv">

                <div className="playerInfo">

                    <GameInfoData title="Username"/>
                    <GameInfoData title="Tag"/>
                    <GameInfoData title="Character"/>
                    <GameInfoData title="Skin"/>
                    <GameInfoData title="Wins"/>

                </div>

            </div>

        </div>

    )

}