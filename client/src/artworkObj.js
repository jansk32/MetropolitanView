import React, {useState, useEffect} from 'react'

function ArtWorkObj(props) {
    var [artData, setArtData] = useState({})

    useEffect(() => {
        fetch("http://localhost:8080/" + props.artwork)
        .then((data) => setArtData(data))
        .catch((err) => setArtData({
            primaryImage: "https://i2.wp.com/atlassianblog.wpengine.com/wp-content/uploads/2017/12/screen-shot-2017-11-16-at-3.50.20-pm-1.png?resize=640%2C362&ssl=1"
        }))
    })

    return(
        <div>
            <img src={artData.primaryImage} alt='artwork'></img>
        </div>
    )

}

export default ArtWorkObj;