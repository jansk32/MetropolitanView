import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

function ArtWorkObj(props) {
    var [artData, setArtData] = useState({})

    useEffect(() => {
        axios.get("http://localhost:8080/" + props.artwork)
        .then((resp) => setArtData(resp.data))
        .catch((err) => setArtData({
            primaryImage: "https://i2.wp.com/atlassianblog.wpengine.com/wp-content/uploads/2017/12/screen-shot-2017-11-16-at-3.50.20-pm-1.png?resize=640%2C362&ssl=1"
        }))
    })

    return(
        <div style={{width: "100vw", height: "80vh"}}>
            <Link to={`art/${artData.objectID}`}><img className="galleryImg" src={artData.primaryImageSmall} alt={artData.title}></img></Link>
        </div>
    )

}

export default ArtWorkObj;