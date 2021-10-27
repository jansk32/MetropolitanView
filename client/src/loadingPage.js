import React from 'react'
import loading from "./loading-icon.png"

function LoadingPage () {

    return(
        <div className="loadingScreen">
            <img className="loadingIcon" src={loading} alt="loading screen"/>
        </div>
    )
}

export default LoadingPage