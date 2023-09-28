import { useState } from "react"

export function GameInfoData({title}) {

    const [dataValue, setDataValue] = useState("");
    
    return (
        <div className="gameInfoData">
            <div className="infoTitle">{title}</div>
            <div className="infoData">{dataValue}</div>
        </div>
    )

}