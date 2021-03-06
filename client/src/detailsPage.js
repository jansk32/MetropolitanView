import React, {useState,useEffect} from "react";
import { useParams } from "react-router";
import LoadingPage from "./loadingPage";
import axios from 'axios';

function DetailsPage() {
    var params = useParams()
    var [details, setDetails] = useState({})
    var [isLoading, setLoading] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8080/" + params.id)
        .then((resp) => {
          setDetails(resp.data);
          setLoading(true);
        })
        .catch((err) => console.error(err))
      }, [])

    return(
        (isLoading ? <div style={{ paddingLeft: "5%"}}>
        <div>
            <h1>{details.title}</h1>
        </div>
        <div style={{display:"flex"}}>
            <div>
            <img src={details.primaryImageSmall} alt={details.title} />
            </div>
            
             <div className="detailsBox">
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
        </div> : <LoadingPage />)
    )

}

export default DetailsPage;