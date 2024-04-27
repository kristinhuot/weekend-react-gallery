import GalleryItem from '../Gallery Item/GalleryItem.jsx'


function GalleryList({photoGallery, fetchPhotoGallery}) {



return (
    <>
    {photoGallery.map((item) => {

        console.log('item is:', item);
        return (
            < GalleryItem
            item key = {item.id}
            photoGallery = {item}
            fetchPhotoGallery = {fetchPhotoGallery}
            />
        )
    })}
    </>
)
}



export default GalleryList

