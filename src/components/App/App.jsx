import {useState, useEffect} from 'react'; 
import axios from 'axios';


function App() {

  const [photoGallery, setPhotoGallery] = useState([]); 

  useEffect(() => {
    fetchPhotoGallery(); 
  }, [])

  const fetchPhotoGallery = () => {
    axios({
      method: 'GET',
      url: '/api/gallery'
    })
    .then((response) => {
      console.log('We got photo gallery:', response.data);
      setPhotoGallery(response.data);
    })
    .catch((error) => {
      console.log('Error in fetchPhotoGallery', error);
    })
  }


    return (
      <div data-testid="app">
        <header>
          <h1>React Gallery</h1>
        </header>

        <p>The gallery goes here!</p>
        <img src="images/goat_small.jpg" width="200" height="200"/>
        <img src="images/market.JPG" width="200" height="200"/>
        <img src="images/portugal.jpg" width="200" height="200"/>
        <img src="images/pretzel.jpeg" width="200" height="200"/>
        <img src="images/skiing.jpg" width="200" height="200"/>
        <img src="images/tikal.JPG" width="200" height="200"/>
      </div>
    );
}

export default App;
