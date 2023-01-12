import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".gallery");
galleryEl.addEventListener('click', openModal);

function openModal(event) {
  event.preventDefault();
  // event.target
  console.log(event.target.dataset.source);
  // event.target.dataset -об'єкт з дата атрибутами
  let lightbox = new SimpleLightbox('.gallery a', {showCounter: false });
}

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


const galleryMarkup = galleryEl.insertAdjacentHTML('beforeend', markup);


