
import { getResearch } from './js/pixabay-api';
import {markupResearch, showLoader, hideLoader, refs } from './js/render-functions';
import imageUrl from '../src/img/error.png';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";



refs.formElem.addEventListener('submit', event => {
    event.preventDefault();
    const gallery = refs.inputElem.value.trim();
    if (gallery === '' || gallery === ' ') {
        iziToast.error({
            position: 'topRight',
            theme: 'dark',
            messageColor: 'white',
            iconUrl: imageUrl,
            backgroundColor: '#ef4040',
            message: 'Please enter a search word.',
        });
    } else {
        showLoader();
        getResearch(gallery).then(arr => {
            if (arr.hits.length === 0) {
                iziToast.error({
                    position: 'topRight',
                    theme: 'dark',
                    messageColor: 'white',
                    iconUrl: imageUrl,
                    backgroundColor: '#ef4040',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                });
                refs.galleryElem.innerHTML = '';
            } else {
                refs.galleryElem.innerHTML = '';
                markupResearch(arr.hits);
                let newGallery = new SimpleLightbox('.gallery-link', {
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250,
    }).refresh();

    newGallery.on('error.simplelightbox', function (e) {
        console.log(e);
    });
            }
        }).catch(err => console.log(err)).finally(() => {
            hideLoader();
            refs.inputElem.value = '';
        });
    }
});



  