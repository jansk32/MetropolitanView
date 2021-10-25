import ArtWorkObj from "./artworkObj";
import {useState, useEffect} from 'react'
import axios from 'axios';
import './App.css'

function Home() {

  var [artData, setArts] = useState([]);
  var [shownData, setShown] = useState([]);
  var [isLoading, setIsLoading] = useState(false)
  var [currentInd, setCurrentInd] = useState(0)


  useEffect(() => {
    axios.get("http://localhost:8080")
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
      <h1>Gallery</h1>
      <div className="gallery">
      {artData.slice(currentInd, currentInd + 3).map((obj) => <ArtWorkObj artwork={obj} key={obj}/>)}
    </div>
    </div>)
  );
}

export default Home;
