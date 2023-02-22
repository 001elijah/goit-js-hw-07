import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const divElement = document.querySelector('div.gallery');

function createGalleryItems(itemsArr) {
    itemsArr.forEach(obj => {
        divElement.innerHTML += `<div class="gallery__item">
        <a class="gallery__link" href="${obj.original}">
          <img
            class="gallery__image"
            src="${obj.preview}"
            data-source="${obj.original}"
            alt="${obj.description}"
          />
        </a>
      </div>`
    });
};

function selectImage(evt) {
    evt.preventDefault();
    if (evt.target.parentNode !== document.body) {
        basicLightbox.create(`
		    <img width="1400" height="900" src="${evt.target.dataset.source}">
	    `).show()
    };
};

createGalleryItems(galleryItems);

divElement.addEventListener('click', selectImage);