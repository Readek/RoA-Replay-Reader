export function GameInfoData({title, value}) {
    
    return (
        <div className="gameInfoData">
            {title && <div className="infoTitle">{title}</div>}
            
            <div className="infoData">{value}</div>
        </div>
    )

}