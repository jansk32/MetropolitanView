import React, {useState, useEffect} from 'react'

function ArtWorkObj(props) {
    var [artData, setArtData] = useState({})

    useEffect(() => {
        fetch("http://localhost:8080/" + props.artwork)
        .then((data) => setArtData(data))
        .catch((err) => console.error(err))
    })

    return(
        <div>
            <img src={artData.primaryImage} alt='artwork'></img>
        </div>
    )

}

export default ArtWorkObj;