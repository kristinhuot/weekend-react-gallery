import axios from 'axios'

function GalleryItem ({eachPhoto, fetchPhotoGallery}) {

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
            <img src = {eachPhoto.url} width="200" height="200"/>
            <p><button onClick={likeButton} data-testid="like">Like</button> Like Count - {eachPhoto.likes}</p>
        </span>


    )

}




export default GalleryItem


