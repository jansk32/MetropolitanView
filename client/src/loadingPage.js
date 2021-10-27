import React from 'react'
import loading from "./loading-icon.png"

function LoadingPage () {

    return(
        <div className="loadingScreen">
            <center style={{padding: "35%"}}>
            <img className="loadingIcon" src={loading} alt="loading screen"/>
            </center>
        </div>
    )
}

export default LoadingPage