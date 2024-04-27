

function GalleryItem ({photoGallery, fetchPhotoGallery}) {

    console.log('photoGallery is:', photoGallery);
    console.log('fetch Photo Gallery function is:', fetchPhotoGallery);

    return (

        <span>
            <p>{photoGallery.title}</p>
            <img src = {photoGallery.url} width="200" height="200"/>
            <p><button>Like</button></p>
        </span>


    )

}




export default GalleryItem



{/* <img src="images/goat_small.jpg" width="200" height="200"/>
<img src="images/market.JPG" width="200" height="200"/>
<img src="images/portugal.jpg" width="200" height="200"/>
<img src="images/pretzel.jpeg" width="200" height="200"/>
<img src="images/skiing.jpg" width="200" height="200"/>
<img src="images/tikal.JPG" width="200" height="200"/> */}