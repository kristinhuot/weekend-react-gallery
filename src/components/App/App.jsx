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
      console.log('We got the photo gallery:', response.data);
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
        <GalleryList photoGallery= {photoGallery} fetchPhotoGallery = {fetchPhotoGallery}/>
        
      </div>
    );
}

export default App;
