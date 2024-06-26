export function getResearch(gallery) {
    const BASE_URL = 'https://pixabay.com';
    const END_POINT = '/api/';
    const params = new URLSearchParams({
        key: '44398690-5434b83d57176502a6803f4be',
        q: gallery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    });
    const url = `${BASE_URL}${END_POINT}?${params}`;
    try { return fetch(url).then(res => res.json()) } catch(err) {
        console.log(err);
        iziToast.error({
            message: 'Error',
        });
    };
}
