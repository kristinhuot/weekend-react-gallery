import axios from 'axios'
import { useState } from 'react';

function GalleryItem ({eachPhoto, fetchPhotoGallery}) {

const [showDescription, setShowDescription] = useState(false)

const toggleDescription = () => {
    if (showDescription === false){
        setShowDescription(true)
    } else {
        setShowDescription(false)
    }
}

const likeButton = () => {
    axios({
        method: 'PUT',
        url: `/api/gallery/${eachPhoto.id}`
    })
    .then((response) => {
        fetchPhotoGallery(); 
    })
    .catch((error)=> {
        console.log('Like button error', error);
    })
}
 
    return (

        <span data-testid="galleryItem">
            <p>{eachPhoto.title}</p>
            <div data-testid="toggle" onClick={toggleDescription}>{showDescription ? eachPhoto.description : <img onClick={toggleDescription} src = {eachPhoto.url} width="200" height="200"/> }</div>
            <p><button onClick={likeButton} data-testid="like">Like</button> Like Count - {eachPhoto.likes}</p>
        </span>


    )

}




export default GalleryItem


