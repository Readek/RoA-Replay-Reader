export function GameInfoData({title, value, img, tooltip}) {

    let nameOfClass = "spriteIcon"
    if (img == "/images/Icons/Time.png") {
        nameOfClass = "timeIcon";
    }

    return (
        <div 
            className="gameInfoData"
            tooltip $$ title={tooltip}
        >
            {img && <img className={nameOfClass} src={process.env.PUBLIC_URL + img}/>}
            {title && <div className="infoTitle">{title}</div>}
            <div className="infoData">{value}</div>
        </div>
    )

}