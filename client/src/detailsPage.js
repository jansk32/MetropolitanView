import React, {useState,useEffect} from "react";

function DetailsPage(props) {

    var [details, setDetails] = useState(props.details)


    return(
        <div style={{ paddingLeft: "5%"}}>
        <div>
            <h1>{details.title}</h1>
        </div>
        <div style={{display:"flex"}}>
            <div>
            <img src={details.primaryImageSmall} alt={details.title} />
            </div>
            <div style={{paddingTop: "15%", paddingLeft:"10%", width:"50%", fontSize: "20px"}}>
            <table>
                <tr>
                    <td><b>Medium: </b></td>
                    <td>{details.medium ? details.medium : "Unknown"}</td>
                </tr>   
                <tr>
                    <td><b>Period: </b></td>
                    <td>{details.period ? details.period : "Unknown"}, around {details.period ? details.title : "Unknown"}</td>
                </tr>   
                <tr>
                    <td><b>Dimensions: </b></td>
                    <td>{details.dimensions ? details.dimensions : "Unknown"}</td>
                </tr>   
                <tr>
                    <td><b>Region: </b></td>
                    <td>{details.region ? details.region : "Unknown"}</td>
                </tr>      
            </table>
            </div>
        </div>
        </div>
    )

}

export default DetailsPage;