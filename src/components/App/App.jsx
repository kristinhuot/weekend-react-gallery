import {useState, useEffect} from 'react'; 
import axios from 'axios';
import GalleryList from '../Gallery List/GalleryList';
import GalleryForm from '../Gallery Form/GalleryForm';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Container } from '@mui/material';


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
        <Container>
        <header>
          <h1>React Gallery</h1>
        </header>
       
        <p>Add a new gallery item!</p>
        <GalleryForm fetchPhotoGallery = {fetchPhotoGallery}/>
        <GalleryList photoGallery= {photoGallery} fetchPhotoGallery = {fetchPhotoGallery}/>
        </Container>
      </div>
    );
}

export default App;
