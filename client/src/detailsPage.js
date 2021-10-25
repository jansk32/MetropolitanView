import React, {useState,useEffect} from "react";

function DetailsPage(props) {

    var [details, setDetails] = useState(props.details)


    return(
        <div>
            <div>
            <img src={details.primaryImageSmall} alt={details.title} />
            </div>
            <div>
            <table>
                <tr>
                    <td>Title: </td>
                    <td>{details.title ? details.title : "Unknown"}</td>
                </tr> 
                <tr>
                    <td>Medium: </td>
                    <td>{details.medium ? details.medium : "Unknown"}</td>
                </tr>   
                <tr>
                    <td>Period: </td>
                    <td>{details.period ? details.period : "Unknown"}, around {details.period ? details.title : "Unknown"}</td>
                </tr>   
                <tr>
                    <td>Dimensions: </td>
                    <td>{details.dimensions ? details.dimensions : "Unknown"}</td>
                </tr>   
                <tr>
                    <td>region: </td>
                    <td>{details.region ? details.region : "Unknown"}</td>
                </tr>      
            </table>
            </div>
        </div>
    )

}

export default DetailsPage;