import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


export const refs = {
    formElem: document.querySelector('.form-search'),
    inputElem: document.querySelector('.input-search'),
    btnElem: document.querySelector('.btn-search'),
    galleryElem: document.querySelector('.gallery-list'),
    loader: document.querySelector('.loader'),
};
export function showLoader() {
    refs.loader.classList.remove('visually-hidden');
}
export function hideLoader() {
    refs.loader.classList.add('visually-hidden');
}

export function markupResearch(gallery) {
    let markup = '';

    gallery.forEach(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
        markup += `<li class="gallery-item">
<a class="gallery-link" href="${largeImageURL}"><img class="gallery-img" src="${webformatURL}" alt="${tags}"/></a>
<div class="img-info">
<p><strong>Likes</strong> ${likes}</p>
<p><strong>Views</strong> ${views}</p>
<p><strong>Comments</strong> ${comments}</p>
<p><strong>Downloads</strong> ${downloads}</p></div></li>`
    });
    refs.galleryElem.insertAdjacentHTML('afterbegin', markup);

    let newGallery = new SimpleLightbox('.gallery-link', {
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250,
    }).refresh();

    newGallery.on('error.simplelightbox', function (e) {
        console.log(e);
    });
}

    