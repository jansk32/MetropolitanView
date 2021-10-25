import React, {useState, useEffect} from 'react'

function ArtWorkObj(props) {
    var [artData, setArtData] = useState(props)

    return(
        <div>
            <img src={artData.primaryImage} alt='artwork'></img>
        </div>
    )

}

export default ArtWorkObj;