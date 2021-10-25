import ArtWorkObj from "./artworkObj";
import {useState, useEffect} from 'react'
import axios from 'axios';
import './App.css'

function App() {

  var [artData, setArts] = useState([]);
  var [shownData, setShown] = useState([]);
  var [isLoading, setIsLoading] = useState(false)
  var [currentInd, setCurrentInd] = useState(0)


  useEffect(() => {
    axios.get("http://localhost:8080")
    .then((resp) => {
      setArts(resp.data);
      setShown(resp.data.slice(currentInd, currentInd + 3))
      setIsLoading(true)
    })
    .catch((err) => console.error(err))
  }, [])

  setInterval(() => {
    setCurrentInd(currentInd + 1)
  }, 10000)

  return (
    (isLoading &&  
    <div>
      <h1>Gallery</h1>
      <div className="gallery">
      {shownData.map((obj) => <ArtWorkObj artwork={obj} key={obj}/>)}
    </div>
    </div>)
  );
}

export default App;
