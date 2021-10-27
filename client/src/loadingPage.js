import React from 'react'
import loading from "./loading-icon.png"

function LoadingPage () {

    return(
        <div className="loadingScreen">
            <center>
            <img className="loadingIcon" src={loading} alt="loading screen"/>
            </center>
        </div>
    )
}

export default LoadingPage