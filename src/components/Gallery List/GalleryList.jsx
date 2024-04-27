import GalleryItem from '../Gallery Item/GalleryItem.jsx'


function GalleryList({photoGallery, fetchPhotoGallery}) {



return (

    <span data-testid="galleryList">    
        {photoGallery.map((each) => {
            return (
                < GalleryItem
                item key = {each.id}
                eachPhoto = {each}
                fetchPhotoGallery = {fetchPhotoGallery}
                />
            )
        })}
   </span>
)
}



export default GalleryList

