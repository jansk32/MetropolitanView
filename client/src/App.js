import ArtWorkObj from "./artworkObj";
import {useState, useEffect} from 'react'
import axios from 'axios';
import DetailsPage from "./detailsPage";
import './App.css'

function App() {

  var [artData, setArts] = useState([]);
  var [shownData, setShown] = useState([]);
  var [isLoading, setIsLoading] = useState(false)
  var [currentInd, setCurrentInd] = useState(0)


  useEffect(() => {
    axios.get("http://localhost:8080/53176")
    .then((resp) => {
      setArts(resp.data);
      //setShown(resp.data.slice(currentInd, currentInd + 3))
      setIsLoading(true)
    })
    .catch((err) => console.error(err))
  }, [])

  setInterval(() => {
    if (currentInd < artData.length - 2){
    setCurrentInd(currentInd + 1)
    }else{
      setCurrentInd(0)
    }
    //setShown(artData.slice(currentInd))
  }, 10000)

  return (
    (isLoading &&  
    <div>
      <DetailsPage details={artData}/>
    </div>)
  );
}

export default App;
