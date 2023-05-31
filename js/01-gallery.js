import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".gallery");
galleryEl.addEventListener('click', openModal);

function openModal(event) {
  event.preventDefault();
  // event.target
  console.log(event.target.dataset.source);
  basicLightbox.create(`
		<img width="1400" height="900" src="${event.target.dataset.source}">
	`).show()
  // event.target.dataset -об'єкт з дата атрибутами
}

const markup = galleryItems.map((element) => 
`<div class="gallery__item">
<a class="gallery__link" href="${element.original}">
  <img
    class="gallery__image"
    src="${element.preview}"
    data-source="${element.original}"
    alt="${element.description}"
  />
</a>
</div>`
).join('');


const galleryMarkup = galleryEl.insertAdjacentHTML('beforeend', markup);







