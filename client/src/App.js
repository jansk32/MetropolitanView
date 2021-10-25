import ArtWorkObj from "./artworkObj";
import {useState, useEffect} from 'react'
import axios from 'axios';

function App() {

  var [arts, setArts] = useState([]);
  var [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    fetch("http:localhost:8080/")
    .then((data) => {
      setArts([11922,
        2032,
        816522]);
      setIsLoading(false)
      console.log(data)
    })
    .catch((err) => console.error(err))
  }, [])

  return (
    (isLoading &&  <div className="App">
      {arts.map((obj) => <ArtWorkObj artwork={obj} />
      )}
    </div>)
  );
}

export default App;
