import ArtWorkObj from "./artworkObj";
import {useState, useEffect} from 'react'
import axios from 'axios';

function App() {

  var [artData, setArts] = useState([]);
  var [isLoading, setIsLoading] = useState(false)
  var [currentInd, setCurrentId] = useState(0)


  useEffect(() => {
    axios.get("http://localhost:8080")
    .then((resp) => {
      setArts(resp.data);
      setIsLoading(true)
    })
    .catch((err) => console.error(err))
  }, [])

  return (
    (isLoading &&  <div className="App">
      {artData.slice(currentInd, currentInd+ 3).map((obj) => <ArtWorkObj artwork={obj} />)}
    </div>)
  );
}

export default App;
