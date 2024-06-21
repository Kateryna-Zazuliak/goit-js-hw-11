export const refs = {
    formElem: document.querySelector('.form-search'),
    inputElem: document.querySelector('.input-search'),
    btnElem: document.querySelector('.btn-search'),
    galleryElem: document.querySelector('.gallery-list'),
    loader: document.querySelector('.visually-hidden'),
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
<div class="img-info-item"><p><strong>Likes</strong>${likes}</p></div>
<div class="img-info-item"><p><strong>Views</strong>${views}</p></div>
<div class="img-info-item"><p><strong>Comments</strong>${comments}</p></div>
<div class="img-info-item"><p><strong>Downloads</strong>${downloads}</p></div></div></li>`
    });
    refs.galleryElem.insertAdjacentHTML('afterbegin', markup);
}

    