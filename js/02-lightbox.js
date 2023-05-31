import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const markup = galleryItems.map((element) => 
`<a class="gallery__link" href="${element.original}">
  <img
    class="gallery__image"
    src="${element.preview}"
    data-source="${element.original}"
    alt="${element.description}"
  />
</a>`
).join('');


console.log(markup);

galleryEl.addEventListener('click', (event) => {
  event.preventDefault();

  let lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});

  
});

const galleryMarkup = galleryEl.insertAdjacentHTML('beforeend', markup);


