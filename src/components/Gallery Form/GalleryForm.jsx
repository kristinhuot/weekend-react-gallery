import { useState } from "react";
import axios from 'axios'

function GalleryForm({fetchPhotoGallery}){
    const [URLInput, setURLInput] = useState('');
    const [titleInput, setTitleInput] = useState('');
    const [descriptionInput, setDescriptionInput] = useState('');

    const createNewGalleryItem = (event) => {
        event.preventDefault(); 

        axios({
            method: 'POST',
            url: '/api/gallery',
            data: {
                url: URLInput,
                title: titleInput,
                description: descriptionInput
            }
        })
        .then((response) => {
            fetchPhotoGallery(); 
            setURLInput('');
            setTitleInput('');
            setDescriptionInput(''); 
        })
        .catch((error) => {
            console.log('Error in createNewGalleryItem', error);
        })
    }

    return (
        <form onSubmit={createNewGalleryItem}>
            <input
                value={URLInput}
                onChange={(event) => {setURLInput(event.target.value)}}
                type="text"
                placeholder="Place photo URL here"
            />
             <input
                value={titleInput}
                onChange={(event) => {setTitleInput(event.target.value)}}
                type="text"
                placeholder="Place photo title here"
            />
             <input
                value={descriptionInput}
                onChange={(event) => {setDescriptionInput(event.target.value)}}
                type="text"
                placeholder="Place photo description here"
            />
            <button>Submit</button>
        </form>


    )

}

export default GalleryForm 