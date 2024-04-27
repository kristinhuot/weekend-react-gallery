import GalleryItem from '../Gallery Item/GalleryItem.jsx'


function GalleryList({photoGallery, fetchPhotoGallery}) {


    
return (
    <>
    {photoGallery.map((item) => {
        return (
            < GalleryItem
            item key = {item.id}
            photoGallery = {photoGallery}
            fetchPhotoGallery = {fetchPhotoGallery}
            />
        )
    })}
    </>
)
}



export default GalleryList

